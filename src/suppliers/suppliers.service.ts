import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SuppliersService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createSupplierDto: CreateSupplierDto) {
    return this.prismaService.suppliers.create({
      data: createSupplierDto,
    });
  }

  findAll() {
    return this.prismaService.suppliers.findMany();
  }

  findOne(id: string) {
    console.log('tudo bem');
    return this.prismaService.suppliers.findUnique({ where: { id } });
  }

  update(id: string, updateSupplierDto: UpdateSupplierDto) {
    return this.prismaService.suppliers.update({
      where: { id },
      data: {
        updated_at: new Date(),
        ...updateSupplierDto,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.suppliers.delete({ where: { id } });
  }
}
