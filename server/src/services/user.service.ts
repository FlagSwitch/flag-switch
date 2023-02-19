import { TCreateUser } from "types/user.types";
import { userRepository } from "../db/respositories";
import { User } from "@prisma/client";

const createUser = async (createUserFields: TCreateUser): Promise<User> => {
  return userRepository.create(createUserFields);
};

export { createUser };
