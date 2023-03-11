import { Module } from "@nestjs/common";
import { FeatureController } from "./feature.controller";
import { FeatureService } from "./feature.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [],
  controllers: [FeatureController],
  providers: [FeatureService, PrismaService],
})
export class FeatureModule {}
