import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import User from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...data } = createUserDto;
    const hash = await bcrypt.hash(password, 10);

    return this.prismaService.users.create({
      data: { password: hash, ...data },
    });
  }

  findAll() {
    return this.prismaService.users.findMany({
      omit: {
        password: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.users.findUnique({
      omit: {
        password: true,
      },
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const { password, ...data } = updateUserDto;
      const hash = await bcrypt.hash(password, 10);

      return this.prismaService.users.update({
        omit: { password: true },
        where: { id },
        data: {
          ...data,
          password: hash,
        },
      });
    }

    return this.prismaService.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prismaService.users.delete({ where: { id } });
  }
}
