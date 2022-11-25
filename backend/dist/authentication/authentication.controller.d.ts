import { AuthenticationService } from './authentication.service';
export declare class AuthenticationController {
    private readonly authentication;
    constructor(authentication: AuthenticationService);
    login(request: any): Promise<{
        access_token: string;
        user: import("../user/dto/update-user.dto").UpdateUserDto;
    }>;
}
