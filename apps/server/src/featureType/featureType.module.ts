import { Module } from "@nestjs/common";
import { FeatureTypeController } from "./featureType.controller";
import { FeatureTypeService } from "./featureType.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [],
  controllers: [FeatureTypeController],
  providers: [FeatureTypeService, PrismaService],
})
export class FeatureTypeModule {}
