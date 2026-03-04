/*
  Warnings:

  - You are about to drop the column `gameId` on the `game_versions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[editionId,platform]` on the table `game_versions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "game_versions" DROP CONSTRAINT "game_versions_gameId_fkey";

-- DropIndex
DROP INDEX "game_edition_name_gameId_key";

-- DropIndex
DROP INDEX "game_versions_gameId_editionId_platform_key";

-- DropIndex
DROP INDEX "game_versions_gameId_idx";

-- AlterTable
ALTER TABLE "game_versions" DROP COLUMN "gameId";

-- CreateIndex
CREATE UNIQUE INDEX "game_versions_editionId_platform_key" ON "game_versions"("editionId", "platform");
