import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { SalesProductsModule } from './sales-products/sales-products.module';
import { SalesModule } from './sales/sales.module';
import { PurchasesModule } from './purchases/purchases.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from 'prisma/prisma.service';
import { UlidService } from './ulid/ulid.service';

@Module({
  imports: [
    UsersModule,
    SuppliersModule,
    SalesProductsModule,
    SalesModule,
    PurchasesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UlidService],
})
export class AppModule {}
