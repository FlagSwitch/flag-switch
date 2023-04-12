/*
  Warnings:

  - The primary key for the `EnvFeature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Environment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Environment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `environmentId` on the `EnvFeature` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_EnvironmentToProject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "EnvFeature" DROP CONSTRAINT "EnvFeature_environmentId_fkey";

-- DropForeignKey
ALTER TABLE "_EnvironmentToProject" DROP CONSTRAINT "_EnvironmentToProject_A_fkey";

-- AlterTable
ALTER TABLE "EnvFeature" DROP CONSTRAINT "EnvFeature_pkey",
DROP COLUMN "environmentId",
ADD COLUMN     "environmentId" INTEGER NOT NULL,
ADD CONSTRAINT "EnvFeature_pkey" PRIMARY KEY ("featureName", "environmentId");

-- AlterTable
ALTER TABLE "Environment" DROP CONSTRAINT "Environment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Environment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_EnvironmentToProject" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_EnvironmentToProject_AB_unique" ON "_EnvironmentToProject"("A", "B");

-- AddForeignKey
ALTER TABLE "EnvFeature" ADD CONSTRAINT "EnvFeature_environmentId_fkey" FOREIGN KEY ("environmentId") REFERENCES "Environment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnvironmentToProject" ADD CONSTRAINT "_EnvironmentToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Environment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
