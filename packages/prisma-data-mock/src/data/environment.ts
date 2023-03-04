import { Environment } from "@prisma/client";
import { faker } from "@faker-js/faker";

const createEnvironmentMock = (): Environment => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  };
};

export { createEnvironmentMock };
