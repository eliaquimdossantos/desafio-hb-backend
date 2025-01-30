import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PurchasesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createPurchaseDto: CreatePurchaseDto) {
    return this.prismaService.purchases.create({ data: createPurchaseDto });
  }

  findAll() {
    return this.prismaService.purchases.findMany({
      include: { sales: true, suppliers: true },
    });
  }

  findOne(id: string) {
    return this.prismaService.purchases.findUnique({
      include: {
        suppliers: true,
      },
      where: { id },
    });
  }

  update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    return this.prismaService.purchases.update({
      where: { id },
      data: { updated_at: new Date(), ...updatePurchaseDto },
    });
  }

  remove(id: string) {
    return this.prismaService.purchases.delete({
      where: { id },
    });
  }
}
