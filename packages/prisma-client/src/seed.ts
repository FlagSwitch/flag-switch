import { PrismaClient, FeatureTypeEnum } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  Object.keys(FeatureTypeEnum).forEach(async (value: string) => {
    await prisma.featureType.create({
      data: {
        name: value as FeatureTypeEnum,
      },
    });
  });
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
