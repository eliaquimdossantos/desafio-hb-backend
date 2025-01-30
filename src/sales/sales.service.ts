import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createSaleDto: CreateSaleDto) {
    return this.prismaService.sales.create({ data: createSaleDto });
  }

  findAll() {
    return this.prismaService.sales.findMany({
      include: {
        users: { select: { name: true } },
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.sales.findUnique({
      include: {
        users: { select: { name: true } },
        purchases: true,
        sales_products: true,
      },
      where: { id },
    });
  }

  update(id: string, updateSaleDto: UpdateSaleDto) {
    return this.prismaService.sales.update({
      data: { updated_at: new Date(), ...updateSaleDto },
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaService.sales.delete({ where: { id } });
  }
}
