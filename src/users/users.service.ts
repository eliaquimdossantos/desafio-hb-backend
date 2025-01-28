import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { UlidService } from 'src/ulid/ulid.service';
import User from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly ulidService: UlidService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const id: string = this.ulidService.generate();
    const { password, ...data } = createUserDto;
    const hash = await bcrypt.hash(password, 10);

    return this.prismaService.users.create({
      data: { id, password: hash, ...data },
    });
  }

  findAll() {
    return this.prismaService.users.findMany();
  }

  findOne(id: string) {
    return this.prismaService.users.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prismaService.users.delete({ where: { id } });
  }
}
