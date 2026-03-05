import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';
import { WhereTicketSearchInput } from './dto/search-ticket.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, Status, TicketStatus, ticket } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { TicketPagination } from './ticket.resolver';
import { SelectedFields } from 'src/utils/methods';

@Injectable()
export class TicketService extends BaseService<
  ticket,
  typeof CreateTicketInput,
  typeof UpdateTicketInput,
  typeof WhereTicketSearchInput,
  typeof TicketPagination,
  Prisma.ticketDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('Ticket', prisma.ticket);
  }

  async create(
    input: typeof CreateTicketInput,
    fields: SelectedFields,
  ): Promise<ticket> {
    const payload = input as unknown as CreateTicketInput;

    const createdTicket = await this.prisma.$transaction(async (tx) => {
      const product = await tx.product.findUnique({
        where: { id: payload.product_id },
        select: { company_id: true },
      });

      if (!product) {
        throw new BadRequestException('Invalid product_id. Product not found.');
      }

      const firstLevelAssignee = await tx.user_company.findFirst({
        where: {
          company_id: product.company_id,
          status: Status.ACTIVE,
          deletedAt: null,
          user: {
            role: 'MANUF_TECH_GEN',
            status: Status.ACTIVE,
            deletedAt: null,
          },
        },
        orderBy: { id: 'asc' },
        select: { user_id: true },
      });

      if (!firstLevelAssignee) {
        throw new BadRequestException(
          'No active MANUF_TECH_GEN user mapped to this company.',
        );
      }

      const ticketRecord = await tx.ticket.create({
        data: payload,
        select: { id: true },
      });

      await tx.ticket_levels.create({
        data: {
          ticket_id: ticketRecord.id,
          level: 1,
          assigned_to_id: firstLevelAssignee.user_id,
          diagnostic_notes: payload.diagnostic_notes ?? null,
          resolution_notes: payload.resolution_notes ?? null,
          approval_required: false,
          createdById: payload.createdById,
        },
      });

      return ticketRecord;
    });

    const createdWithSelection = await this.prisma.ticket.findUnique({
      where: { id: createdTicket.id },
      select: fields,
    });

    if (!createdWithSelection) {
      throw new BadRequestException('Could not load created ticket.');
    }

    return createdWithSelection as unknown as ticket;
  }

  async update(
    id: number,
    update: typeof UpdateTicketInput,
    fields: SelectedFields,
  ) {
    const payload = update as unknown as UpdateTicketInput;

    const isFinalStatus =
      payload.status === TicketStatus.RESOLVED ||
      payload.status === TicketStatus.CLOSED;

    if (isFinalStatus) {
      if (!payload.updatedById) {
        throw new BadRequestException(
          'updatedById is required to resolve or close a ticket.',
        );
      }

      const latestLevel = await this.prisma.ticket_levels.findFirst({
        where: {
          ticket_id: id,
          deletedAt: null,
        },
        orderBy: [{ level: 'desc' }, { id: 'desc' }],
        select: {
          id: true,
          assigned_to_id: true,
        },
      });

      if (!latestLevel) {
        throw new BadRequestException(
          'No ticket level found for this ticket. Cannot finalize status.',
        );
      }

      if (latestLevel.assigned_to_id !== payload.updatedById) {
        throw new BadRequestException(
          'Only the currently assigned escalation user can resolve or close this ticket.',
        );
      }
    }

    return super.update(id, update, fields);
  }
}
