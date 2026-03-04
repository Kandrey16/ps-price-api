/*
  Warnings:

  - A unique constraint covering the columns `[gameVersionRegionId]` on the table `prices` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "prices_gameVersionRegionId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "prices_gameVersionRegionId_key" ON "prices"("gameVersionRegionId");
