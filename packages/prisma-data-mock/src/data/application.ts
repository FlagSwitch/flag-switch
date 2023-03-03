import { Application } from "@prisma/client";
import { faker } from "@faker-js/faker";

const createApplicationMock = (params: { accountId: string }): Application => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    createdAt: faker.datatype.datetime(),
    accountId: params.accountId,
  };
};

export { createApplicationMock };
