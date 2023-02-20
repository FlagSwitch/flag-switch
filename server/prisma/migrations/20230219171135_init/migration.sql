/*
  Warnings:

  - You are about to drop the column `type` on the `EnvFeature` table. All the data in the column will be lost.
  - Changed the type of `type` on the `Feature` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FeatureType" AS ENUM ('Release', 'GradualRollout', 'Permission', 'Experimental', 'Operational');

-- AlterTable
ALTER TABLE "EnvFeature" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "type",
ADD COLUMN     "type" "FeatureType" NOT NULL;

-- DropEnum
DROP TYPE "FeatureToggleType";
