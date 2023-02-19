import prisma from "../prisma";
import { TCreateEnvironment } from "../../types/environment.types";
import { Environment } from "@prisma/client";

const EnvironmentDAO = prisma.environment;

const create = async (
  createEnvFields: TCreateEnvironment
): Promise<Environment> => {
  const { id, name, clientId } = createEnvFields;
  const environment = await EnvironmentDAO.create({
    data: {
      id,
      name,
      clientId,
    },
  });
  return environment;
};

const getByClient = async ({
  clientId,
}: {
  clientId: string;
}): Promise<Environment[]> => {
  return EnvironmentDAO.findMany({
    where: {
      clientId,
    },
  });
};

export { create, getByClient };
