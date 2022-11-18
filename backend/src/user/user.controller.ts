/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @Post()
  create(@Body() user: User): Promise<User>{
    return this.userService.createUser(user);
  }
}
