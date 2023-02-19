import { TClient } from "types/client.types";
import { clientRepository } from "../db/respositories";
import { Client } from "@prisma/client";

const createClient = async (createClientFields: TClient): Promise<Client> => {
  return clientRepository.create(createClientFields);
};

export { createClient };
