import prisma from "../prisma";
import { TCreateUser } from "../../types/user.types";
import { User } from "@prisma/client";

const UserDAO = prisma.user;

const create = async (createUserFields: TCreateUser): Promise<User> => {
  const { id, name, clientId } = createUserFields;
  const user = await UserDAO.create({
    data: {
      id,
      name,
      clientId,
    },
  });
  return user;
};

export { create };
