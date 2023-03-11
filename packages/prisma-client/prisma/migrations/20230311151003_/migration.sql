/*
  Warnings:

  - The primary key for the `DashboardUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `accountId` on the `DashboardUser` table. All the data in the column will be lost.
  - The `id` column on the `DashboardUser` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `EnvFeature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `EnvFeature` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hash]` on the table `DashboardUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `DashboardUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `DashboardUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `DashboardUser` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `A` on the `_DashboardUserToProject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RoleEnum" AS ENUM ('Admin', 'User');

-- CreateEnum
CREATE TYPE "StatusEnum" AS ENUM ('Active', 'Inactive');

-- DropForeignKey
ALTER TABLE "_DashboardUserToProject" DROP CONSTRAINT "_DashboardUserToProject_A_fkey";

-- AlterTable
ALTER TABLE "DashboardUser" DROP CONSTRAINT "DashboardUser_pkey",
DROP COLUMN "accountId",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "hash" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "previousPassword" TEXT,
ADD COLUMN     "role" "RoleEnum" NOT NULL,
ADD COLUMN     "status" "StatusEnum" NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ADD CONSTRAINT "DashboardUser_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "EnvFeature" DROP CONSTRAINT "EnvFeature_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "EnvFeature_pkey" PRIMARY KEY ("featureToggleId", "environmentId");

-- AlterTable
ALTER TABLE "_DashboardUserToProject" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Forgot" (
    "id" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "dashboardUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Forgot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Forgot_hash_key" ON "Forgot"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "DashboardUser_hash_key" ON "DashboardUser"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "_DashboardUserToProject_AB_unique" ON "_DashboardUserToProject"("A", "B");

-- AddForeignKey
ALTER TABLE "Forgot" ADD CONSTRAINT "Forgot_dashboardUserId_fkey" FOREIGN KEY ("dashboardUserId") REFERENCES "DashboardUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DashboardUserToProject" ADD CONSTRAINT "_DashboardUserToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "DashboardUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
