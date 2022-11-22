import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateUserDto): Promise<CreateUserDto | null> {
    return this.prisma.user.create({
      data,
    });
  }

  findAll(): Promise<CreateUserDto[] | null> {
    return this.prisma.user.findMany({});
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  update(id: number, data: UpdateUserDto): Promise<CreateUserDto> {
    return this.prisma.user.update({
      where: { id: id },
      data,
    });
  }

  remove(id: number): Promise<CreateUserDto> {
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
