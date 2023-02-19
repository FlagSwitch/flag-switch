import { FastifyInstance } from "fastify";
import { ClientSchema } from "../schema/client.schema";
import { createClient } from "../controllers/client.controller";

function ClientRouter(fastify: FastifyInstance): void {
  fastify.route({
    method: "POST",
    url: "/create",
    schema: {
      body: ClientSchema,
    },
    handler: createClient,
  });
}

export default ClientRouter;
