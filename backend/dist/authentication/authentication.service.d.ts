import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthenticationService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    valideUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        name: string;
        firstName: string;
    }>;
    login(user: UpdateUserDto): Promise<{
        access_token: string;
        user: UpdateUserDto;
    }>;
}
