import Fastify from "fastify";
import clientRouter from "./routes/client.router";
import userRouter from "./routes/user.router";
import projectRouter from "./routes/project.router";
import environmentRouter from "./routes/environment.router";
import { FastifyInstance } from "fastify";
import pinoLogger from "./logger";

function buildServer(): FastifyInstance {
  const server = Fastify({
    logger: pinoLogger,
  });

  server.get("/healthcheck", async function () {
    return { status: "OK" };
  });

  server.register(clientRouter, { prefix: "api/client" });
  server.register(userRouter, { prefix: "api/user" });
  server.register(projectRouter, { prefix: "api/project" });
  server.register(environmentRouter, { prefix: "api/environment" });

  return server;
}

export default buildServer;
