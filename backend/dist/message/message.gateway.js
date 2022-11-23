"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const message_service_1 = require("./message.service");
const update_message_dto_1 = require("./dto/update-message.dto");
const socket_io_1 = require("socket.io");
let MessageGateway = class MessageGateway {
    constructor(messageService) {
        this.messageService = messageService;
    }
    async handleConnection(socket) {
        await console.log(socket);
    }
    create(content, userId) {
        userId = 2;
        const createMessageDto = { content, userId };
        this.server.sockets.emit('receive_data', createMessageDto);
        return this.messageService.create(createMessageDto);
    }
    async findAll() {
        const messages = await this.messageService.findAll();
        this.server.sockets.emit('get all messages', messages);
    }
    findOne(id) {
        return this.messageService.findOne(id);
    }
    update(updateMessageDto) {
        return this.messageService.update(updateMessageDto.id, updateMessageDto);
    }
    remove(id) {
        return this.messageService.remove(id);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MessageGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], MessageGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_message_dto_1.UpdateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageGateway.prototype, "remove", null);
MessageGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageGateway);
exports.MessageGateway = MessageGateway;
//# sourceMappingURL=message.gateway.js.map