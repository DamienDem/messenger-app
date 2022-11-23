import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { MessageService } from './message.service';
import { UpdateMessageDto } from './dto/update-message.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class MessageGateway implements OnGatewayConnection {
  constructor(private readonly messageService: MessageService) {}
  @WebSocketServer()
  server: Server;

  async handleConnection(socket: Socket) {
    await console.log(socket);
  }

  @SubscribeMessage('sendMessage')
  create(@MessageBody() content: string, userId: number) {
    userId = 2;
    const createMessageDto: CreateMessageDto = { content, userId };
    this.server.sockets.emit('receive_data', createMessageDto);

    return this.messageService.create(createMessageDto);
  }

  @SubscribeMessage('findAllMessage')
  async findAll() {
    const messages = await this.messageService.findAll();
    this.server.sockets.emit('get all messages', messages);
  }

  @SubscribeMessage('findOneMessage')
  findOne(@MessageBody() id: number) {
    return this.messageService.findOne(id);
  }

  @SubscribeMessage('updateMessage')
  update(@MessageBody() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(updateMessageDto.id, updateMessageDto);
  }

  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: number) {
    return this.messageService.remove(id);
  }
}
