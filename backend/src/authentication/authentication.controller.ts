import { Controller, Post, Req } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authentication: AuthenticationService) { }

    @Post('login')
    async login(@Req() request) {
        return this.authentication.login(request.user)
    }
}
