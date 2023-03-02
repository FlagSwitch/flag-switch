import { Account } from '@prisma/client';
import { faker } from '@faker-js/faker';

const createAccountMock = (): Account => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  };
};

export { createAccountMock };
