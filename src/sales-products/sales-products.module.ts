import { Module } from '@nestjs/common';
import { SalesProductsService } from './sales-products.service';
import { SalesProductsController } from './sales-products.controller';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [SalesProductsController],
  providers: [SalesProductsService, PrismaService],
})
export class SalesProductsModule {}
