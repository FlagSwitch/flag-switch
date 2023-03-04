import { Application } from "@prisma/client";
import { faker } from "@faker-js/faker";

const createApplicationMock = (): Application => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    createdAt: faker.datatype.datetime(),
  };
};

export { createApplicationMock };
