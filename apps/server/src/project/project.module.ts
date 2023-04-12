import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { EnvironmentService } from "../environment/environment.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [EnvironmentService, ProjectService, PrismaService],
})
export class ProjectModule {}
