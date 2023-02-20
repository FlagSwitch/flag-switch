import { FastifyInstance } from "fastify";
import { ClientSchema } from "../schema/client.schema";
import { createClient } from "../controllers/client.controller";

async function FeatureToggleRouter(fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: "POST",
    url: "/create",
    schema: {
      body: ClientSchema,
    },
    handler: createClient,
  });
}

export default FeatureToggleRouter;
