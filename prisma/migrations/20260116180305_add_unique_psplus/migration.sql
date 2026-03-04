/*
  Warnings:

  - The values [INTERFACE] on the enum `LanguageType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[gameId,type]` on the table `ps_plus_offers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LanguageType_new" AS ENUM ('VOICE', 'SUBTITLE');
ALTER TABLE "game_language_support" ALTER COLUMN "languageType" TYPE "LanguageType_new" USING ("languageType"::text::"LanguageType_new");
ALTER TYPE "LanguageType" RENAME TO "LanguageType_old";
ALTER TYPE "LanguageType_new" RENAME TO "LanguageType";
DROP TYPE "LanguageType_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "ps_plus_offers_gameId_type_key" ON "ps_plus_offers"("gameId", "type");
