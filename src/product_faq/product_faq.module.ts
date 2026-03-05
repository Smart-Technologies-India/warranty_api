import { Module } from '@nestjs/common';
import { ProductFaqService } from './product_faq.service';
import { ProductFaqResolver } from './product_faq.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductFaqResolver, ProductFaqService],
})
export class ProductFaqModule {}
