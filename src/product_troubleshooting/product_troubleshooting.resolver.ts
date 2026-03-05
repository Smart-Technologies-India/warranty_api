import { ObjectType, Resolver } from '@nestjs/graphql';
import { createBaseResolver } from 'src/base/base.resolver';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import {
  Prisma,
  product_troubleshooting as ProductTroubleshootingModel,
} from '@prisma/client';
import { ProductTroubleshootingService } from './product_troubleshooting.service';
import { ProductTroubleshooting } from './entities/product_troubleshooting.entity';
import { CreateProductTroubleshootingInput } from './dto/create-product_troubleshooting.input';
import { UpdateProductTroubleshootingInput } from './dto/update-product_troubleshooting.input';
import { WhereProductTroubleshootingSearchInput } from './dto/search-product_troubleshooting.input';

@ObjectType()
export class ProductTroubleshootingPagination extends BasePaginated(
  ProductTroubleshooting,
) {}

const BaseProductTroubleshootingResolver = createBaseResolver<
  typeof ProductTroubleshooting,
  ProductTroubleshootingModel,
  typeof CreateProductTroubleshootingInput,
  typeof UpdateProductTroubleshootingInput,
  typeof WhereProductTroubleshootingSearchInput,
  typeof ProductTroubleshootingPagination,
  Prisma.product_troubleshootingDelegate<any>
>(
  () => ProductTroubleshooting,
  'ProductTroubleshooting',
  () => CreateProductTroubleshootingInput,
  () => UpdateProductTroubleshootingInput,
  () => WhereProductTroubleshootingSearchInput,
  () => ProductTroubleshootingPagination,
);

@Resolver(() => ProductTroubleshooting)
export class ProductTroubleshootingResolver extends BaseProductTroubleshootingResolver {
  constructor(
    private readonly productTroubleshootingService: ProductTroubleshootingService,
  ) {
    super(productTroubleshootingService);
  }
}
