import prisma from "../prisma";
import { TCreateUser } from "../../types/user.types";

const UserDAO = prisma.user;

const create = async (createUserFields: TCreateUser) => {
    const { id, name, email, clientId } = createUserFields;
    const user = await UserDAO.create({
        data: {
            id,
            name,
            email,
            clientId,
        }
    });
    return user;
}

export {
    create
}