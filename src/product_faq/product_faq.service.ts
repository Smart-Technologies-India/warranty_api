import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { Prisma, product_faq } from '@prisma/client';
import { CreateProductFaqInput } from './dto/create-product_faq.input';
import { UpdateProductFaqInput } from './dto/update-product_faq.input';
import { WhereProductFaqSearchInput } from './dto/search-product_faq.input';
import { ProductFaqPagination } from './product_faq.resolver';

@Injectable()
export class ProductFaqService extends BaseService<
  product_faq,
  typeof CreateProductFaqInput,
  typeof UpdateProductFaqInput,
  typeof WhereProductFaqSearchInput,
  typeof ProductFaqPagination,
  Prisma.product_faqDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('ProductFaq', prisma.product_faq);
  }
}
