import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { PrismaService } from "./prisma.service";

const CORS_OPTIONS = {
  origin: '*',// or '*' or whatever is required
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
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe());
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000, "0.0.0.0");
}
bootstrap();
