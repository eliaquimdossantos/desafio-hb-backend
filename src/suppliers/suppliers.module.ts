import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { PrismaService } from 'prisma/prisma.service';
import { UlidService } from 'src/ulid/ulid.service';

@Module({
  controllers: [SuppliersController],
  providers: [SuppliersService, PrismaService, UlidService],
})
export class SuppliersModule {}
