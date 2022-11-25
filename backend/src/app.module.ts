import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { JwtService } from '@nestjs/jwt/dist';

@Module({
  imports: [PrismaModule, UserModule, MessageModule, AuthenticationModule],
  controllers: [AppController, AuthenticationController],
  providers: [AppService, PrismaService, UserService, AuthenticationService, JwtService],
})
export class AppModule {}
