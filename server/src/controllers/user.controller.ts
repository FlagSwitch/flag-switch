import { FastifyReply, FastifyRequest } from "fastify";
import { TCreateUser } from "../types/user.types";
import { userService } from "../services";

export interface ICreateUser {
  Body: TCreateUser;
}

export const createUser = async (
  request: FastifyRequest<ICreateUser>,
  reply: FastifyReply
): Promise<void> => {
  const { id, name, email, clientId } = request.body;
  const user = await userService.createUser({
    id,
    name,
    email,
    clientId,
  });
  reply.status(200).send({ data: user });
};
