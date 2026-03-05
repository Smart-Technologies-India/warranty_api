import { Module } from '@nestjs/common';
import { ManfStockService } from './manf_stock.service';
import { ManfStockResolver } from './manf_stock.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ManfStockResolver, ManfStockService],
})
export class ManfStockModule {}
