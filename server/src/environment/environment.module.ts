import { Module } from '@nestjs/common';
import { EnvironmentController } from './environment.controller';
import { EnvironmentService } from './environment.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [EnvironmentController],
  providers: [EnvironmentService, PrismaService],
})
export class EnvironmentModule {}
