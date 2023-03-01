import { Module } from '@nestjs/common';
import { EnvFeatureController } from './envFeature.controller';
import { EnvFeatureService } from './envFeature.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [EnvFeatureController],
  providers: [EnvFeatureService, PrismaService],
})
export class EnvFeatureModule {}
