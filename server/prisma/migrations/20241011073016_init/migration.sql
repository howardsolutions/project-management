/*
  Warnings:

  - You are about to drop the column `productManagerUserId` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attachment" ALTER COLUMN "fileName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "productManagerUserId",
ADD COLUMN     "projectManagerUserId" INTEGER;
