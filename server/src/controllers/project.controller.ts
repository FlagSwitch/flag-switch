import { FastifyReply, FastifyRequest } from "fastify";
import { TCreateProject } from "../types/project.types";
import { projectService } from "../services";

export interface ICreateProject {
    Body: TCreateProject;
}

export const createProject = async (request: FastifyRequest<ICreateProject>, reply: FastifyReply) => { 
    const { id, name, description, clientId } = request.body;
    const project = await projectService.createProject({
        id,
        name,
        description,
        clientId
    })
    reply.status(200).send({ data: project })
}