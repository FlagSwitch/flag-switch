"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("./prisma.service");
const CORS_OPTIONS = {
    origin: ['http://127.0.0.1:5173'],
    allowedHeaders: [
        'Access-Control-Allow-Origin',
        'Origin',
        'X-Requested-With',
        'Accept',
        'Content-Type',
        'Authorization',
    ],
    exposedHeaders: 'Authorization',
    credentials: true,
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
};
async function bootstrap() {
    const fastifyAdapter = new platform_fastify_1.FastifyAdapter();
    fastifyAdapter.enableCors(CORS_OPTIONS);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, fastifyAdapter);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Flag Switch Server')
        .setDescription('Flag Switch - description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    await app.listen(3000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map