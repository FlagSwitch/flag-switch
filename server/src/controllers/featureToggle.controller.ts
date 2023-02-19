import { FastifyReply, FastifyRequest } from "fastify";
import { TCreateFeatureToggle } from "../types/featureToggle.types";
import {} from "../services";

export interface ICreateEnvironment {
  Body: TCreateFeatureToggle;
}

export const createFeatureToggle = async (
  request: FastifyRequest<ICreateEnvironment>,
  reply: FastifyReply
): Promise<void> => {
  reply.status(200).send({ data: [] });
};
