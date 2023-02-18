import { FastifyReply, FastifyRequest } from "fastify";
import { TCreateFeatureToggle } from "../types/featureToggle.types";
import {  } from "../services";

export interface ICreateEnvironment {
    Body: TCreateFeatureToggle;
}

export const createFeatureToggle = async (request: FastifyRequest<ICreateEnvironment>, reply: FastifyReply) => { 
    const { id, name, clientId } = request.body;
    const environment = await environmentService.createEnvironment({
        id,
        name,
        clientId
    })
    reply.status(200).send({ data: environment })
}