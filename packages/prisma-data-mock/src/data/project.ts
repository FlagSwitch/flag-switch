import { Prisma, DashboardUser } from "@prisma/client";
import { faker } from "@faker-js/faker";

const projectWithUsers = Prisma.validator<Prisma.ProjectArgs>()({
  include: { dashboardUsers: true },
});

type ProjectWithPosts = Prisma.ProjectGetPayload<typeof projectWithUsers>;

const createProjectMock = (params: {
  dashboardUsers?: DashboardUser[];
}): ProjectWithPosts => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    description: faker.lorem.sentence(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    dashboardUsers: params.dashboardUsers || [],
  };
};

export { createProjectMock };
