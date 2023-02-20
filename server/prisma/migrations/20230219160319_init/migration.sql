/*
  Warnings:

  - Added the required column `environmentId` to the `EnvFeatureToggle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EnvFeatureToggle" ADD COLUMN     "environmentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EnvFeatureToggle" ADD CONSTRAINT "EnvFeatureToggle_environmentId_fkey" FOREIGN KEY ("environmentId") REFERENCES "Environment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
