import { Module } from "@nestjs/common";
import { ForgotService } from "./forgot.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  providers: [ForgotService, PrismaService],
  exports: [ForgotService],
})
export class ForgotModule {}
