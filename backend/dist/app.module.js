"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const user_service_1 = require("./user/user.service");
const message_module_1 = require("./message/message.module");
const authentication_controller_1 = require("./authentication/authentication.controller");
const authentication_service_1 = require("./authentication/authentication.service");
const authentication_module_1 = require("./authentication/authentication.module");
const dist_1 = require("@nestjs/jwt/dist");
const user_controller_1 = require("./user/user.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [message_module_1.MessageModule, authentication_module_1.AuthenticationModule],
        controllers: [app_controller_1.AppController, authentication_controller_1.AuthenticationController, user_controller_1.UserController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, user_service_1.UserService, authentication_service_1.AuthenticationService, dist_1.JwtService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map