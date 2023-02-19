import { FastifyInstance } from "fastify";
import { UserSchema } from "../schema/user.schema";
import { createUser } from "../controllers/user.controller";

function UserRouter(fastify: FastifyInstance): void {
  fastify.route({
    method: "POST",
    url: "/create",
    schema: {
      body: UserSchema,
    },
    handler: createUser,
  });
}

export default UserRouter;
