import { Project } from '@prisma/client';
import { faker } from '@faker-js/faker';

const createProjectMock = (params: { accountId: string }): Project => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    description: faker.lorem.sentence(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    accountId: params.accountId,
  };
};

export { createProjectMock };
