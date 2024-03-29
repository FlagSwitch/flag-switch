import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { PrismaService } from "./prisma/prisma.service";
import { global } from "router-constants";
const CORS_OPTIONS = {
  origin: "*", // or '*' or whatever is required
  allowedHeaders: [
    "Access-Control-Allow-Origin",
    "Origin",
    "X-Requested-With",
    "Accept",
    "Content-Type",
    "Authorization",
  ],
  exposedHeaders: "Authorization",
  credentials: true,
  methods: ["GET", "PUT", "OPTIONS", "POST", "DELETE"],
};

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter();
  fastifyAdapter.enableCors(CORS_OPTIONS);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter
  );
  const config = new DocumentBuilder()
    .setTitle("Flag Switch Server")
    .setDescription("Flag Switch - description")
    .addBearerAuth()
    .setVersion("1.0")
    .build();

  app.setGlobalPrefix(global.globalAPIPrefix);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  app.useGlobalPipes(new ValidationPipe());
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000, "0.0.0.0");
}
bootstrap();
