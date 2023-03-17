import { Prisma, DashboardUser } from "@prisma/client";
import { faker } from "@faker-js/faker";

const projectWithUsers = Prisma.validator<Prisma.ProjectArgs>()({
  include: { dashboardUsers: true },
});

type ProjectWithUsers = Prisma.ProjectGetPayload<typeof projectWithUsers>;

const createProjectMock = (params: {
  dashboardUsers?: DashboardUser[];
}): ProjectWithUsers => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    description: faker.lorem.sentence(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: null,
    dashboardUsers: params.dashboardUsers || [],
  };
};

export { createProjectMock };
