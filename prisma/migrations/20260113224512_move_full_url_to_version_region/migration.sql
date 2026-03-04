/*
  Warnings:

  - You are about to drop the column `fullUrl` on the `games` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "games_fullUrl_key";

-- AlterTable
ALTER TABLE "games" DROP COLUMN "fullUrl";
