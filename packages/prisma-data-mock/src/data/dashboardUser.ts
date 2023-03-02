import { DashboardUser } from '@prisma/client';
import { faker } from '@faker-js/faker';

const createDashboardUserMock = (params: {
  accountId: string;
}): DashboardUser => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    email: faker.internet.email(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    accountId: params.accountId,
  };
};

export { createDashboardUserMock };
