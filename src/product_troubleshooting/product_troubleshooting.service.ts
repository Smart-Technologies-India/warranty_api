import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { Prisma, product_troubleshooting } from '@prisma/client';
import { CreateProductTroubleshootingInput } from './dto/create-product_troubleshooting.input';
import { UpdateProductTroubleshootingInput } from './dto/update-product_troubleshooting.input';
import { WhereProductTroubleshootingSearchInput } from './dto/search-product_troubleshooting.input';
import { ProductTroubleshootingPagination } from './product_troubleshooting.resolver';

@Injectable()
export class ProductTroubleshootingService extends BaseService<
  product_troubleshooting,
  typeof CreateProductTroubleshootingInput,
  typeof UpdateProductTroubleshootingInput,
  typeof WhereProductTroubleshootingSearchInput,
  typeof ProductTroubleshootingPagination,
  Prisma.product_troubleshootingDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('ProductTroubleshooting', prisma.product_troubleshooting);
  }
}
