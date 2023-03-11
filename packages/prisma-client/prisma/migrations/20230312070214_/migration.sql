/*
  Warnings:

  - You are about to drop the column `hash` on the `DashboardUser` table. All the data in the column will be lost.
  - You are about to drop the column `hash` on the `Forgot` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registrationToken]` on the table `DashboardUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `Forgot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `Forgot` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "DashboardUser_hash_key";

-- DropIndex
DROP INDEX "Forgot_hash_key";

-- AlterTable
ALTER TABLE "DashboardUser" DROP COLUMN "hash",
ADD COLUMN     "registrationToken" TEXT;

-- AlterTable
ALTER TABLE "Forgot" DROP COLUMN "hash",
ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DashboardUser_registrationToken_key" ON "DashboardUser"("registrationToken");

-- CreateIndex
CREATE UNIQUE INDEX "Forgot_token_key" ON "Forgot"("token");
