import { FastifyReply, FastifyRequest } from "fastify";
import { TCreateEnvironment } from "../types/environment.types";
import { environmentService } from "../services";

export interface ICreateEnvironment {
  Body: TCreateEnvironment;
}

export const createEnvironment = async (
  request: FastifyRequest<ICreateEnvironment>,
  reply: FastifyReply
): Promise<void> => {
  const { id, name, clientId } = request.body;
  const environment = await environmentService.createEnvironment({
    id,
    name,
    clientId,
  });
  reply.status(200).send({ data: environment });
};
