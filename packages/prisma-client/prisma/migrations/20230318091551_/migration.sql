/*
  Warnings:

  - You are about to drop the column `type` on the `Feature` table. All the data in the column will be lost.
  - Added the required column `typeName` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FeatureTypeEnum" AS ENUM ('Release', 'GradualRollout', 'Permission', 'Experimental', 'Operational');

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "type",
ADD COLUMN     "typeName" "FeatureTypeEnum" NOT NULL;

-- DropEnum
DROP TYPE "FeatureType";

-- CreateTable
CREATE TABLE "FeatureType" (
    "name" "FeatureTypeEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeatureType_pkey" PRIMARY KEY ("name")
);

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_typeName_fkey" FOREIGN KEY ("typeName") REFERENCES "FeatureType"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
