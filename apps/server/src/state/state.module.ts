import { Module } from "@nestjs/common";
import { StateController } from "./state.controller";
import { StateService } from "./state.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [],
  controllers: [StateController],
  providers: [StateService, PrismaService],
})
export class StateModule {}
