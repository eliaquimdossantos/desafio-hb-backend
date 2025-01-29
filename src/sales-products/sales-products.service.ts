import { Injectable } from '@nestjs/common';
import { CreateSalesProductDto } from './dto/create-sales-product.dto';
import { UpdateSalesProductDto } from './dto/update-sales-product.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SalesProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createSalesProductDto: CreateSalesProductDto) {
    return this.prismaService.sales_products.create({
      data: createSalesProductDto,
    });
  }

  findAll() {
    return this.prismaService.sales_products.findMany();
  }

  findOne(id: string) {
    return this.prismaService.sales_products.findUnique({ where: { id } });
  }

  update(id: string, updateSalesProductDto: UpdateSalesProductDto) {
    return this.prismaService.sales_products.update({
      data: updateSalesProductDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaService.sales_products.delete({ where: { id } });
  }
}
