/*
  Warnings:

  - A unique constraint covering the columns `[url,gameId]` on the table `game_images` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "game_images_url_gameId_key" ON "game_images"("url", "gameId");
