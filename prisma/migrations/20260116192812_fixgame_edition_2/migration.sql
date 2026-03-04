/*
  Warnings:

  - A unique constraint covering the columns `[name,gameId]` on the table `game_edition` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "game_edition_name_gameId_idx";

-- CreateIndex
CREATE INDEX "game_edition_gameId_idx" ON "game_edition"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "game_edition_name_gameId_key" ON "game_edition"("name", "gameId");
