/*
  Warnings:

  - Added the required column `clientId` to the `Environment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Environment" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Environment" ADD CONSTRAINT "Environment_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
