import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTicketLevelsInput } from './dto/create-ticket_levels.input';
import { UpdateTicketLevelsInput } from './dto/update-ticket_levels.input';
import { WhereTicketLevelsSearchInput } from './dto/search-ticket_levels.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, Role, ticket_levels } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { TicketLevelsPagination } from './ticket_levels.resolver';
import { SelectedFields } from 'src/utils/methods';

const TICKET_ESCALATION_FLOW: Role[] = [
  'MANUF_TECH_GEN',
  'MANUF_TECHNICAL',
  'MANUF_TECH_EXPERT',
  'MANUF_TECH_MANAGER',
];

@Injectable()
export class TicketLevelsService extends BaseService<
  ticket_levels,
  typeof CreateTicketLevelsInput,
  typeof UpdateTicketLevelsInput,
  typeof WhereTicketLevelsSearchInput,
  typeof TicketLevelsPagination,
  Prisma.ticket_levelsDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('TicketLevels', prisma.ticket_levels);
  }

  async create(input: typeof CreateTicketLevelsInput, fields: SelectedFields) {
    const payload = input as unknown as CreateTicketLevelsInput;
    await this.ensureEscalationOrderOnCreate(payload);
    return super.create(input, fields);
  }

  async update(
    id: number,
    update: typeof UpdateTicketLevelsInput,
    fields: SelectedFields,
  ) {
    const payload = update as unknown as UpdateTicketLevelsInput;
    await this.ensureEscalationRoleOnUpdate(id, payload);
    return super.update(id, update, fields);
  }

  private async ensureEscalationOrderOnCreate(input: CreateTicketLevelsInput) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: input.ticket_id },
      select: { id: true },
    });

    if (!ticket) {
      throw new BadRequestException('Invalid ticket_id. Ticket not found.');
    }

    const existingLevels = await this.prisma.ticket_levels.findMany({
      where: {
        ticket_id: input.ticket_id,
        deletedAt: null,
      },
      select: { id: true, level: true },
      orderBy: { level: 'asc' },
    });

    const nextStepIndex = existingLevels.length;

    if (nextStepIndex >= TICKET_ESCALATION_FLOW.length) {
      throw new BadRequestException(
        'Escalation already reached MANUF_TECH_MANAGER. No further escalation allowed.',
      );
    }

    const expectedLevel = nextStepIndex + 1;
    if (input.level !== expectedLevel) {
      throw new BadRequestException(
        `Invalid level. Expected level ${expectedLevel} for this ticket.`,
      );
    }

    await this.assertAssigneeRole(
      input.assigned_to_id,
      TICKET_ESCALATION_FLOW[nextStepIndex],
    );
  }

  private async ensureEscalationRoleOnUpdate(
    id: number,
    update: UpdateTicketLevelsInput,
  ) {
    if (!update.assigned_to_id && !update.level) {
      return;
    }

    const levelEntry = await this.prisma.ticket_levels.findUnique({
      where: { id },
      select: {
        id: true,
        level: true,
        assigned_to_id: true,
      },
    });

    if (!levelEntry) {
      throw new BadRequestException(`Ticket level not found with id ${id}`);
    }

    const effectiveLevel = update.level ?? levelEntry.level;
    const effectiveAssigneeId =
      update.assigned_to_id ?? levelEntry.assigned_to_id;

    if (effectiveLevel < 1 || effectiveLevel > TICKET_ESCALATION_FLOW.length) {
      throw new BadRequestException(
        `Level must be between 1 and ${TICKET_ESCALATION_FLOW.length}.`,
      );
    }

    const expectedRole = TICKET_ESCALATION_FLOW[effectiveLevel - 1];
    await this.assertAssigneeRole(effectiveAssigneeId, expectedRole);
  }

  private async assertAssigneeRole(userId: number, expectedRole: Role) {
    const assignee = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true },
    });

    if (!assignee) {
      throw new BadRequestException('Assigned user not found.');
    }

    if (assignee.role !== expectedRole) {
      throw new BadRequestException(
        `Invalid assignee role. Expected ${expectedRole} for this escalation step.`,
      );
    }
  }
}
