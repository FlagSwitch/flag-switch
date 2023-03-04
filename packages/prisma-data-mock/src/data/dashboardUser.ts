import { DashboardUser } from "@prisma/client";
import { faker } from "@faker-js/faker";

const createDashboardUserMock = (): DashboardUser => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    email: faker.internet.email(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  };
};

export { createDashboardUserMock };
