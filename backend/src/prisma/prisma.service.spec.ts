import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
import { AppModule } from '../app.module';
import { NestFactory } from '@nestjs/core';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be defined', () => {
    expect(service.onModuleInit()).toBeDefined();
  });
  it('should be defined', async () => {
    const app = await NestFactory.create(AppModule);
    expect(service.enableShutdownHooks(app)).toBeDefined();
  });
});
