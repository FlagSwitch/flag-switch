/*
  Warnings:

  - You are about to drop the `EnvFeatureToggle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeatureToggle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FeatureToggleToFlow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EnvFeatureToggle" DROP CONSTRAINT "EnvFeatureToggle_environmentId_fkey";

-- DropForeignKey
ALTER TABLE "EnvFeatureToggle" DROP CONSTRAINT "EnvFeatureToggle_featureToggleId_fkey";

-- DropForeignKey
ALTER TABLE "FeatureToggle" DROP CONSTRAINT "FeatureToggle_projectId_fkey";

-- DropForeignKey
ALTER TABLE "_FeatureToggleToFlow" DROP CONSTRAINT "_FeatureToggleToFlow_A_fkey";

-- DropForeignKey
ALTER TABLE "_FeatureToggleToFlow" DROP CONSTRAINT "_FeatureToggleToFlow_B_fkey";

-- DropTable
DROP TABLE "EnvFeatureToggle";

-- DropTable
DROP TABLE "FeatureToggle";

-- DropTable
DROP TABLE "_FeatureToggleToFlow";

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnvFeature" (
    "id" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,
    "type" "FeatureToggleType" NOT NULL,
    "updatingUser" TEXT NOT NULL,
    "queriedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "environmentId" TEXT NOT NULL,
    "featureToggleId" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "EnvFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FeatureToggleType" NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FeatureToFlow" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FeatureToFlow_AB_unique" ON "_FeatureToFlow"("A", "B");

-- CreateIndex
CREATE INDEX "_FeatureToFlow_B_index" ON "_FeatureToFlow"("B");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvFeature" ADD CONSTRAINT "EnvFeature_environmentId_fkey" FOREIGN KEY ("environmentId") REFERENCES "Environment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvFeature" ADD CONSTRAINT "EnvFeature_featureToggleId_fkey" FOREIGN KEY ("featureToggleId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeatureToFlow" ADD CONSTRAINT "_FeatureToFlow_A_fkey" FOREIGN KEY ("A") REFERENCES "Feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeatureToFlow" ADD CONSTRAINT "_FeatureToFlow_B_fkey" FOREIGN KEY ("B") REFERENCES "Flow"("id") ON DELETE CASCADE ON UPDATE CASCADE;
