import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { Prisma, manf_stock } from '@prisma/client';
import { CreateManfStockInput } from './dto/create-manf_stock.input';
import { UpdateManfStockInput } from './dto/update-manf_stock.input';
import { WhereManfStockSearchInput } from './dto/search-manf_stock.input';
import { ManfStockPagination } from './manf_stock.resolver';

@Injectable()
export class ManfStockService extends BaseService<
  manf_stock,
  typeof CreateManfStockInput,
  typeof UpdateManfStockInput,
  typeof WhereManfStockSearchInput,
  typeof ManfStockPagination,
  Prisma.manf_stockDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('ManfStock', prisma.manf_stock);
  }
}
