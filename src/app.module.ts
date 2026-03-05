import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CityModule } from './city/city.module';
import { ZoneModule } from './zone/zone.module';
import { ProductCategoryModule } from './product_category/product_category.module';
import { ProductSubcategoryModule } from './product_subcategory/product_subcategory.module';
import { CompanyModule } from './company/company.module';
import { UploaderModule } from './uploader/uploader.module';
import { ProductModule } from './product/product.module';
import { UserCompanyModule } from './user_company/user_company.module';
import { SalesModule } from './sales/sales.module';
import { DealerSalesModule } from './dealer_sales/dealer_sales.module';
import { DealerStockModule } from './dealer_stock/dealer_stock.module';
import { TicketModule } from './ticket/ticket.module';
import { TicketLevelsModule } from './ticket_levels/ticket_levels.module';
import { TicketAttachmentsModule } from './ticket_attachments/ticket_attachments.module';
import { CustomerFeedbackTicketModule } from './customer_feedback_ticket/customer_feedback_ticket.module';
import { ProductFaqModule } from './product_faq/product_faq.module';
import { ProductTroubleshootingModule } from './product_troubleshooting/product_troubleshooting.module';
import { ManfStockModule } from './manf_stock/manf_stock.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      sortSchema: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    CityModule,
    ZoneModule,
    ProductCategoryModule,
    ProductSubcategoryModule,
    CompanyModule,
    UploaderModule,
    ProductModule,
    UserCompanyModule,
    SalesModule,
    DealerSalesModule,
    DealerStockModule,
    TicketModule,
    TicketLevelsModule,
    TicketAttachmentsModule,
    CustomerFeedbackTicketModule,
    ProductFaqModule,
    ProductTroubleshootingModule,
    ManfStockModule,

    // BaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
