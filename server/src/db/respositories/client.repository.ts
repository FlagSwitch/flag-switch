import prisma from "../prisma";
import { TClient } from "../../types/client.types";
import { Client } from "@prisma/client";

const ClientDAO = prisma.client;

const create = async (createClientFields: TClient): Promise<Client> => {
  const { id, name } = createClientFields;
  const client = await ClientDAO.create({
    data: {
      id,
      name,
    },
  });
  return client;
};
export { create };
