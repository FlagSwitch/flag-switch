import { FastifyInstance } from "fastify";
import { EnvironmentSchema } from "../schema/environment.schema";
import { createEnvironment } from "../controllers/environment.controller";

async function EnvironmentRouter(fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: "POST",
    url: "/create",
    schema: {
      body: EnvironmentSchema,
    },
    handler: createEnvironment,
  });
}

export default EnvironmentRouter;
