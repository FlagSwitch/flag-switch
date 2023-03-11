import { Module } from "@nestjs/common";
import { DashboardUserController } from "./dashboardUser.controller";
import { DashboardUserService } from "./dashboardUser.service";
import { PrismaService } from "../prisma.service";

@Module({
  imports: [],
  controllers: [DashboardUserController],
  providers: [DashboardUserService, PrismaService],
  exports: [DashboardUserService],
})
export class DashboardUserModule {}
