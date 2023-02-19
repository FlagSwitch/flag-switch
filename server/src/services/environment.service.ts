import { TCreateEnvironment } from "types/environment.types";
import { environmentRepository } from "../db/respositories";
import { Environment } from "@prisma/client";

const createEnvironment = async (
  createEnvFields: TCreateEnvironment
): Promise<Environment> => {
  return environmentRepository.create(createEnvFields);
};

export { createEnvironment };
