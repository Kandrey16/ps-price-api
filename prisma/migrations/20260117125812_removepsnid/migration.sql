/*
  Warnings:

  - You are about to drop the column `psnId` on the `games` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `games` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `games` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "games_psnId_key";

-- AlterTable
ALTER TABLE "games" DROP COLUMN "psnId",
ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "games_slug_key" ON "games"("slug");
