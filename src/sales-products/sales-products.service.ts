import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSalesProductDto } from './dto/create-sales-product.dto';
import { UpdateSalesProductDto } from './dto/update-sales-product.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class SalesProductsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly productService: ProductsService,
  ) {}

  async create(createSalesProductDto: CreateSalesProductDto) {
    const product = await this.productService.findOne(
      createSalesProductDto.product_id,
    );

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const total_price = Number(product.price) * createSalesProductDto.quantity;

    const existingSalesProducts =
      await this.prismaService.sales_products.findUnique({
        where: {
          sale_id_product_id: {
            sale_id: createSalesProductDto.sale_id,
            product_id: createSalesProductDto.product_id,
          },
        },
      });

    const data = {
      total_price,
      ...createSalesProductDto,
    };

    if (existingSalesProducts) {
      return this.update(existingSalesProducts.id, data);
    } else {
      return this.prismaService.sales_products.create({ data });
    }
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
