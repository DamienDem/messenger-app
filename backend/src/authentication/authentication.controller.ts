import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authentication: AuthenticationService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() request) {
        return this.authentication.login(request.body)
    }
}
