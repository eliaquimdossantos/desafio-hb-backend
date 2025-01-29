import { Module } from '@nestjs/common';
import { SalesProductsService } from './sales-products.service';
import { SalesProductsController } from './sales-products.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SalesProductsController],
  providers: [SalesProductsService, PrismaService],
})
export class SalesProductsModule {}
