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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const auth_service_1 = require("src/auth/service/auth.service");
const socket_io_1 = require("socket.io");
const user_service_1 = require("src/user/service/user-service/user.service");
const common_1 = require("@nestjs/common");
const room_service_1 = require("../service/room-service/room.service");
const page_interface_1 = require("../model/page.interface");
const connected_user_service_1 = require("../service/connected-user/connected-user.service");
const room_interface_1 = require("../model/room/room.interface");
const joined_room_service_1 = require("../service/joined-room/joined-room.service");
const message_service_1 = require("../service/message/message.service");
const message_interface_1 = require("../model/message/message.interface");
let ChatGateway = class ChatGateway {
    constructor(authService, userService, roomService, connectedUserService, joinedRoomService, messageService) {
        this.authService = authService;
        this.userService = userService;
        this.roomService = roomService;
        this.connectedUserService = connectedUserService;
        this.joinedRoomService = joinedRoomService;
        this.messageService = messageService;
    }
    async onModuleInit() {
        await this.connectedUserService.deleteAll();
        await this.joinedRoomService.deleteAll();
    }
    async handleConnection(socket) {
        try {
            const decodedToken = await this.authService.verifyJwt(socket.handshake.headers.authorization);
            const user = await this.userService.getOne(decodedToken.user.id);
            if (!user) {
                return this.disconnect(socket);
            }
            else {
                socket.data.user = user;
                const rooms = await this.roomService.getRoomsForUser(user.id, { page: 1, limit: 10 });
                rooms.meta.currentPage = rooms.meta.currentPage - 1;
                await this.connectedUserService.create({ socketId: socket.id, user });
                return this.server.to(socket.id).emit('rooms', rooms);
            }
        }
        catch (_a) {
            return this.disconnect(socket);
        }
    }
    async handleDisconnect(socket) {
        await this.connectedUserService.deleteBySocketId(socket.id);
        socket.disconnect();
    }
    disconnect(socket) {
        socket.emit('Error', new common_1.UnauthorizedException());
        socket.disconnect();
    }
    async onCreateRoom(socket, room) {
        const createdRoom = await this.roomService.createRoom(room, socket.data.user);
        for (const user of createdRoom.users) {
            const connections = await this.connectedUserService.findByUser(user);
            const rooms = await this.roomService.getRoomsForUser(user.id, { page: 1, limit: 10 });
            rooms.meta.currentPage = rooms.meta.currentPage - 1;
            for (const connection of connections) {
                await this.server.to(connection.socketId).emit('rooms', rooms);
            }
        }
    }
    async onPaginateRoom(socket, page) {
        const rooms = await this.roomService.getRoomsForUser(socket.data.user.id, this.handleIncomingPageRequest(page));
        rooms.meta.currentPage = rooms.meta.currentPage - 1;
        return this.server.to(socket.id).emit('rooms', rooms);
    }
    async onJoinRoom(socket, room) {
        const messages = await this.messageService.findMessagesForRoom(room, { limit: 10, page: 1 });
        messages.meta.currentPage = messages.meta.currentPage - 1;
        await this.joinedRoomService.create({ socketId: socket.id, user: socket.data.user, room });
        await this.server.to(socket.id).emit('messages', messages);
    }
    async onLeaveRoom(socket) {
        await this.joinedRoomService.deleteBySocketId(socket.id);
    }
    async onAddMessage(socket, message) {
        const createdMessage = await this.messageService.create(Object.assign(Object.assign({}, message), { user: socket.data.user }));
        const room = await this.roomService.getRoom(createdMessage.room.id);
        const joinedUsers = await this.joinedRoomService.findByRoom(room);
        for (const user of joinedUsers) {
            await this.server.to(user.socketId).emit('messageAdded', createdMessage);
        }
    }
    handleIncomingPageRequest(page) {
        page.limit = page.limit > 100 ? 100 : page.limit;
        page.page = page.page + 1;
        return page;
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, typeof (_g = typeof room_interface_1.RoomI !== "undefined" && room_interface_1.RoomI) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onCreateRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('paginateRooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, typeof (_h = typeof page_interface_1.PageI !== "undefined" && page_interface_1.PageI) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onPaginateRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, typeof (_j = typeof room_interface_1.RoomI !== "undefined" && room_interface_1.RoomI) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaveRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onLeaveRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('addMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, typeof (_k = typeof message_interface_1.MessageI !== "undefined" && message_interface_1.MessageI) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onAddMessage", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: ['https://hoppscotch.io', 'http://localhost:3000', 'http://localhost:4200'] } }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, typeof (_c = typeof room_service_1.RoomService !== "undefined" && room_service_1.RoomService) === "function" ? _c : Object, typeof (_d = typeof connected_user_service_1.ConnectedUserService !== "undefined" && connected_user_service_1.ConnectedUserService) === "function" ? _d : Object, typeof (_e = typeof joined_room_service_1.JoinedRoomService !== "undefined" && joined_room_service_1.JoinedRoomService) === "function" ? _e : Object, typeof (_f = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" ? _f : Object])
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=test.js.map