import { Module } from "@nestjs/common";
import { AccountController } from "./application.controller";
import { ApplicationService } from "./application.service";
import { PrismaService } from "../prisma.service";

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [ApplicationService, PrismaService],
})
export class ApplicationModule {}
