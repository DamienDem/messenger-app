import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
        ) { }

        public async valideUser (email: string, password: string) {
          const user = await this.userService.findByEmail(email)
          if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
          }
          return null
        }
    public async login (data: UpdateUserDto) {
      const user = await this.userService.findByEmail(data.email)
        user.password = undefined;
     
        return {
            // TODO : check if we can avoid calling sign function with the env
            access_token: this.jwtService.sign(user, {
              privateKey: 'secret',
            }),
            data: user,
          };
    }
}
