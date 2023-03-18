/*
  Warnings:

  - The primary key for the `EnvFeature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `featureToggleId` on the `EnvFeature` table. All the data in the column will be lost.
  - The primary key for the `Feature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Feature` table. All the data in the column will be lost.
  - The primary key for the `State` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `_FeatureToState` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `featureName` to the `EnvFeature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `EnvFeature` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EnvFeature" DROP CONSTRAINT "EnvFeature_featureToggleId_fkey";

-- DropForeignKey
ALTER TABLE "_FeatureToState" DROP CONSTRAINT "_FeatureToState_A_fkey";

-- DropForeignKey
ALTER TABLE "_FeatureToState" DROP CONSTRAINT "_FeatureToState_B_fkey";

-- AlterTable
ALTER TABLE "EnvFeature" DROP CONSTRAINT "EnvFeature_pkey",
DROP COLUMN "featureToggleId",
ADD COLUMN     "featureName" TEXT NOT NULL,
ADD COLUMN     "projectId" TEXT NOT NULL,
ADD CONSTRAINT "EnvFeature_pkey" PRIMARY KEY ("featureName", "environmentId");

-- AlterTable
ALTER TABLE "Environment" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_pkey",
DROP COLUMN "id",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD CONSTRAINT "Feature_pkey" PRIMARY KEY ("projectId", "name");

-- AlterTable
ALTER TABLE "State" DROP CONSTRAINT "State_pkey",
ADD CONSTRAINT "State_pkey" PRIMARY KEY ("id", "projectId");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "_FeatureToState";

-- CreateTable
CREATE TABLE "FeaturesOnStates" (
    "featureName" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "FeaturesOnStates_pkey" PRIMARY KEY ("stateId","projectId","featureName")
);

-- AddForeignKey
ALTER TABLE "EnvFeature" ADD CONSTRAINT "EnvFeature_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvFeature" ADD CONSTRAINT "EnvFeature_featureName_projectId_fkey" FOREIGN KEY ("featureName", "projectId") REFERENCES "Feature"("name", "projectId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturesOnStates" ADD CONSTRAINT "FeaturesOnStates_featureName_projectId_fkey" FOREIGN KEY ("featureName", "projectId") REFERENCES "Feature"("name", "projectId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturesOnStates" ADD CONSTRAINT "FeaturesOnStates_stateId_projectId_fkey" FOREIGN KEY ("stateId", "projectId") REFERENCES "State"("id", "projectId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturesOnStates" ADD CONSTRAINT "FeaturesOnStates_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
