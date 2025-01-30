import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prismaService.products.create({ data: createProductDto });
  }

  findAll() {
    return this.prismaService.products.findMany();
  }

  findOne(id: string) {
    return this.prismaService.products.findUnique({
      where: { id },
    });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prismaService.products.update({
      where: { id },
      data: { updated_at: new Date(), ...updateProductDto },
    });
  }

  remove(id: string) {
    return this.prismaService.products.delete({
      where: { id },
    });
  }
}
