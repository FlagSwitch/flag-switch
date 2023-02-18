import prisma from "../prisma";
import { TCreateEnvironment } from "../../types/environment.types";

const EnvironmentDAO = prisma.environment;

const create  = async (createEnvFields: TCreateEnvironment) => {
    const { id, name, clientId } = createEnvFields;
    const environment = await EnvironmentDAO.create({
        data: {
            id,
            name,
            clientId,
        }
    });
    return environment;
}

const getByClient = async ({ clientId }: { clientId: string}) => {
    return await EnvironmentDAO.findMany({
        where: {
          clientId
        },
    });
}

export {
    create,
    getByClient
}