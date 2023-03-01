import { PrismaClient } from '@prisma/client';
import { createAccountMock } from '../test/mocks/data/account';
import { createProjectMock } from '../test/mocks/data/project';
import { createFeatureMock } from '../test/mocks/data/feature';
import { createDashboardUserMock } from '../test/mocks/data/dashboardUser';
const prisma = new PrismaClient();
async function main() {
  const account = await prisma.account.create({
    data: createAccountMock(),
  });

  const project = await prisma.project.create({
    data: createProjectMock({ accountId: account.id }),
  });
  await prisma.feature.create({
    data: createFeatureMock({ projectId: project.id }),
  });
  await prisma.feature.create({
    data: createFeatureMock({ projectId: project.id }),
  });

  for (const i of [1, 2, 3]) {
    await prisma.dashboardUser.create({
      data: createDashboardUserMock({ accountId: account.id }),
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
