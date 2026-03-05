import { Resolver, ObjectType } from '@nestjs/graphql';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { Prisma, manf_stock as ManfStockModel } from '@prisma/client';
import { ManfStockService } from './manf_stock.service';
import { ManfStock } from './entities/manf_stock.entity';
import { CreateManfStockInput } from './dto/create-manf_stock.input';
import { UpdateManfStockInput } from './dto/update-manf_stock.input';
import { WhereManfStockSearchInput } from './dto/search-manf_stock.input';

@ObjectType()
export class ManfStockPagination extends BasePaginated(ManfStock) {}

const BaseManfStockResolver = createBaseResolver<
  typeof ManfStock,
  ManfStockModel,
  typeof CreateManfStockInput,
  typeof UpdateManfStockInput,
  typeof WhereManfStockSearchInput,
  typeof ManfStockPagination,
  Prisma.manf_stockDelegate<any>
>(
  () => ManfStock,
  'ManfStock',
  () => CreateManfStockInput,
  () => UpdateManfStockInput,
  () => WhereManfStockSearchInput,
  () => ManfStockPagination,
);

@Resolver(() => ManfStock)
export class ManfStockResolver extends BaseManfStockResolver {
  constructor(private readonly manfStockService: ManfStockService) {
    super(manfStockService);
  }
}
