/*
  Warnings:

  - A unique constraint covering the columns `[name,gameId]` on the table `game_edition` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "game_edition_name_gameId_key" ON "game_edition"("name", "gameId");
