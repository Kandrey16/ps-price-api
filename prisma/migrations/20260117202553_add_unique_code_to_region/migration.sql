/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `regions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "regions_code_key" ON "regions"("code");
