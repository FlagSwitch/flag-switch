import { FastifyInstance } from "fastify";
import { ProjectSchema } from "../schema/project.schema";
import { createProject } from "../controllers/project.controller";

async function ProjectRouter(fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: "POST",
    url: "/create",
    schema: {
      body: ProjectSchema,
    },
    handler: createProject,
  });
}

export default ProjectRouter;
