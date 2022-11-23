import { OnGatewayConnection } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { UpdateMessageDto } from './dto/update-message.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';
export declare class MessageGateway implements OnGatewayConnection {
    private readonly messageService;
    constructor(messageService: MessageService);
    server: Server;
    handleConnection(socket: Socket): Promise<void>;
    create(content: string, userId: number): Promise<CreateMessageDto>;
    findAll(): Promise<void>;
    findOne(id: number): string;
    update(updateMessageDto: UpdateMessageDto): string;
    remove(id: number): string;
}
