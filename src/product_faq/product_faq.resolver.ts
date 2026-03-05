import { ObjectType, Resolver } from '@nestjs/graphql';
import { createBaseResolver } from 'src/base/base.resolver';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { Prisma, product_faq as ProductFaqModel } from '@prisma/client';
import { ProductFaqService } from './product_faq.service';
import { ProductFaq } from './entities/product_faq.entity';
import { CreateProductFaqInput } from './dto/create-product_faq.input';
import { UpdateProductFaqInput } from './dto/update-product_faq.input';
import { WhereProductFaqSearchInput } from './dto/search-product_faq.input';

@ObjectType()
export class ProductFaqPagination extends BasePaginated(ProductFaq) {}

const BaseProductFaqResolver = createBaseResolver<
  typeof ProductFaq,
  ProductFaqModel,
  typeof CreateProductFaqInput,
  typeof UpdateProductFaqInput,
  typeof WhereProductFaqSearchInput,
  typeof ProductFaqPagination,
  Prisma.product_faqDelegate<any>
>(
  () => ProductFaq,
  'ProductFaq',
  () => CreateProductFaqInput,
  () => UpdateProductFaqInput,
  () => WhereProductFaqSearchInput,
  () => ProductFaqPagination,
);

@Resolver(() => ProductFaq)
export class ProductFaqResolver extends BaseProductFaqResolver {
  constructor(private readonly productFaqService: ProductFaqService) {
    super(productFaqService);
  }
}
