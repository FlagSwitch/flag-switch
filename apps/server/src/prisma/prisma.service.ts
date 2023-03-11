import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "prisma-client";
import { registerMiddlewares } from "./middlewares";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  registerMiddlewares() {
    
  }
  async onModuleInit() {
    await this.$connect();
    registerMiddlewares(this);
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}
