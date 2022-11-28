import { Module } from '@nestjs/common';
//import { UserService } from 'src/user/user.service';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.stategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
    imports:[ UserModule, PassportModule, JwtModule],
    providers:[ AuthenticationService, LocalStrategy, JwtService],
    controllers: [AuthenticationController],
    exports: [AuthenticationService]
    
})
export class AuthenticationModule {}
