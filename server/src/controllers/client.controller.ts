import { FastifyReply, FastifyRequest } from "fastify";
import { TClient } from "../types/client.types";
import { clientService } from "../services";

export interface ICreateClient {
  Body: TClient;
}

export const createClient = async (
  request: FastifyRequest<ICreateClient>,
  reply: FastifyReply
): Promise<void> => {
  const { id, name } = request.body;
  const client = await clientService.createClient({
    id,
    name,
  });
  reply.status(200).send({ data: client });
};
