import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
}
