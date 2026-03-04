/*
  Warnings:

  - You are about to drop the column `gameRegionId` on the `game_version_regions` table. All the data in the column will be lost.
  - You are about to drop the `game_regions` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[SKU,regionId]` on the table `game_version_regions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `regionId` to the `game_version_regions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "game_regions" DROP CONSTRAINT "game_regions_gameId_fkey";

-- DropForeignKey
ALTER TABLE "game_regions" DROP CONSTRAINT "game_regions_regionId_fkey";

-- DropForeignKey
ALTER TABLE "game_version_regions" DROP CONSTRAINT "game_version_regions_gameRegionId_fkey";

-- DropIndex
DROP INDEX "game_version_regions_SKU_gameRegionId_key";

-- DropIndex
DROP INDEX "game_version_regions_gameRegionId_idx";

-- AlterTable
ALTER TABLE "game_version_regions" DROP COLUMN "gameRegionId",
ADD COLUMN     "regionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "game_regions";

-- CreateIndex
CREATE INDEX "game_version_regions_regionId_idx" ON "game_version_regions"("regionId");

-- CreateIndex
CREATE UNIQUE INDEX "game_version_regions_SKU_regionId_key" ON "game_version_regions"("SKU", "regionId");

-- AddForeignKey
ALTER TABLE "game_version_regions" ADD CONSTRAINT "game_version_regions_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "regions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
