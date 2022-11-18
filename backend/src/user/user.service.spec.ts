/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return user data', () => {
    const data = { email: "test6",password:"password", name:"test", firstName:"test"}
    const createUser = {
      create: jest.fn().mockReturnValue(data)
    }
    expect(createUser.create(data)).toBe(data)
  })

});
