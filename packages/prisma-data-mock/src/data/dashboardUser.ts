import { DashboardUser, StatusEnum, RoleEnum } from "@prisma/client";
import { faker } from "@faker-js/faker";

const createDashboardUserMock = (): DashboardUser => {
  return {
    id: faker.datatype.number(),
    name: faker.commerce.department(),
    status: StatusEnum.Active,
    role: RoleEnum.User,
    password: faker.internet.password(),
    email: faker.internet.email(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: null,
    previousPassword: null,
    registrationToken: null
  };
};

export { createDashboardUserMock };
