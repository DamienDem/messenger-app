import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto>;
    findAll(): Promise<CreateUserDto[]>;
    findOne(id: string): Promise<CreateUserDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<CreateUserDto>;
    remove(id: string): Promise<CreateUserDto>;
}
