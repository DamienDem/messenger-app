import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateMessageDto): Promise<CreateMessageDto> {
    return this.prisma.message.create({
      data,
    });
  }

  findAll(): Promise<CreateMessageDto[]> {
    return this.prisma.message.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message with data:${updateMessageDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
