import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { UlidService } from 'src/ulid/ulid.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UlidService],
})
export class UsersModule {}
