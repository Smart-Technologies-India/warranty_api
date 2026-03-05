import { Module } from '@nestjs/common';
import { ProductTroubleshootingService } from './product_troubleshooting.service';
import { ProductTroubleshootingResolver } from './product_troubleshooting.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductTroubleshootingResolver, ProductTroubleshootingService],
})
export class ProductTroubleshootingModule {}
