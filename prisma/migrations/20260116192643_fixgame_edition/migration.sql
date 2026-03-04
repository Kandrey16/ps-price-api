-- DropIndex
DROP INDEX "game_edition_gameId_idx";

-- CreateIndex
CREATE INDEX "game_edition_name_gameId_idx" ON "game_edition"("name", "gameId");
