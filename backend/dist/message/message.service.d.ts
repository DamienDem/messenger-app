import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateMessageDto): Promise<CreateMessageDto>;
    findAll(): Promise<CreateMessageDto[]>;
    findOne(id: number): string;
    update(id: number, updateMessageDto: UpdateMessageDto): string;
    remove(id: number): string;
}
