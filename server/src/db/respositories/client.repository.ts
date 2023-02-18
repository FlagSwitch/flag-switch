import prisma from "../prisma";
import { TClient } from "../../types/client.types";

const ClientDAO = prisma.client;

const create  = async (createClientFields: TClient) => {
    const { id, name } = createClientFields;
    const client = await ClientDAO.create({
        data: {
            id,
            name,
        }
    });
    return client;
}
export {
    create
}