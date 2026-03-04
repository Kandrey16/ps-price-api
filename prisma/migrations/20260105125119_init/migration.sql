-- CreateEnum
CREATE TYPE "ReleaseStatus" AS ENUM ('RELEASED', 'PREORDER', 'COMING_SOON');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('PS4', 'PS5', 'PS4_PS5', 'VR', 'VR2');

-- CreateEnum
CREATE TYPE "ImageType" AS ENUM ('SCREENSHOT', 'MAIN', 'BACKGROUND', 'COVER', 'ARTBOOK', 'ICON', 'TRAILER');

-- CreateEnum
CREATE TYPE "LanguageType" AS ENUM ('INTERFACE', 'VOICE', 'SUBTITLE');

-- CreateEnum
CREATE TYPE "PsPlusType" AS ENUM ('ESSENTIAL', 'EXTRA', 'PREMIUM');

-- CreateEnum
CREATE TYPE "PriceType" AS ENUM ('BASE', 'DISCOUNT', 'PS_PLUS');

-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "psnId" TEXT NOT NULL,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "fullUrl" TEXT,
    "rating" INTEGER,
    "genre" TEXT,
    "publisher" TEXT,
    "isFreeToPlay" BOOLEAN DEFAULT false,
    "releaseDate" TIMESTAMP(3),
    "releaseStatus" "ReleaseStatus" NOT NULL DEFAULT 'RELEASED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_language_support" (
    "id" SERIAL NOT NULL,
    "gameId" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,
    "languageType" "LanguageType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_language_support_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_images" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "type" "ImageType" NOT NULL DEFAULT 'SCREENSHOT',
    "gameId" TEXT NOT NULL,

    CONSTRAINT "game_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ps_plus_offers" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "type" "PsPlusType" NOT NULL DEFAULT 'ESSENTIAL',

    CONSTRAINT "ps_plus_offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_edition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "game_edition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_versions" (
    "SKU" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "editionId" INTEGER NOT NULL,
    "platform" "Platform" NOT NULL DEFAULT 'PS5',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_versions_pkey" PRIMARY KEY ("SKU")
);

-- CreateTable
CREATE TABLE "game_regions" (
    "id" SERIAL NOT NULL,
    "regionId" INTEGER NOT NULL,
    "gameId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_version_regions" (
    "id" SERIAL NOT NULL,
    "SKU" TEXT NOT NULL,
    "gameRegionId" INTEGER NOT NULL,
    "storeUrl" TEXT,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "lastChecked" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_version_regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prices" (
    "id" SERIAL NOT NULL,
    "gameVersionRegionId" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "originalPrice" DECIMAL(10,2),
    "currency" VARCHAR(3) NOT NULL,
    "type" "PriceType" NOT NULL DEFAULT 'BASE',
    "hasDiscount" BOOLEAN NOT NULL DEFAULT false,
    "discountPercent" INTEGER DEFAULT 0,
    "discountStart" TIMESTAMP(3),
    "discountFinish" TIMESTAMP(3),
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_history" (
    "id" SERIAL NOT NULL,
    "gameVersionRegionId" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "originalPrice" DECIMAL(10,2),
    "currency" VARCHAR(3) NOT NULL,
    "type" "PriceType" NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "price_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "games_psnId_key" ON "games"("psnId");

-- CreateIndex
CREATE UNIQUE INDEX "games_fullUrl_key" ON "games"("fullUrl");

-- CreateIndex
CREATE UNIQUE INDEX "languages_code_key" ON "languages"("code");

-- CreateIndex
CREATE INDEX "game_language_support_gameId_idx" ON "game_language_support"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "game_language_support_gameId_languageId_languageType_key" ON "game_language_support"("gameId", "languageId", "languageType");

-- CreateIndex
CREATE INDEX "game_images_gameId_idx" ON "game_images"("gameId");

-- CreateIndex
CREATE INDEX "ps_plus_offers_gameId_idx" ON "ps_plus_offers"("gameId");

-- CreateIndex
CREATE INDEX "game_edition_gameId_idx" ON "game_edition"("gameId");

-- CreateIndex
CREATE INDEX "game_versions_gameId_idx" ON "game_versions"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "game_versions_gameId_editionId_platform_key" ON "game_versions"("gameId", "editionId", "platform");

-- CreateIndex
CREATE INDEX "game_regions_gameId_idx" ON "game_regions"("gameId");

-- CreateIndex
CREATE INDEX "game_regions_regionId_idx" ON "game_regions"("regionId");

-- CreateIndex
CREATE UNIQUE INDEX "game_regions_regionId_gameId_key" ON "game_regions"("regionId", "gameId");

-- CreateIndex
CREATE INDEX "game_version_regions_SKU_idx" ON "game_version_regions"("SKU");

-- CreateIndex
CREATE INDEX "game_version_regions_gameRegionId_idx" ON "game_version_regions"("gameRegionId");

-- CreateIndex
CREATE UNIQUE INDEX "game_version_regions_SKU_gameRegionId_key" ON "game_version_regions"("SKU", "gameRegionId");

-- CreateIndex
CREATE INDEX "prices_gameVersionRegionId_idx" ON "prices"("gameVersionRegionId");

-- CreateIndex
CREATE INDEX "prices_recordedAt_idx" ON "prices"("recordedAt");

-- CreateIndex
CREATE INDEX "price_history_gameVersionRegionId_recordedAt_idx" ON "price_history"("gameVersionRegionId", "recordedAt");

-- AddForeignKey
ALTER TABLE "game_language_support" ADD CONSTRAINT "game_language_support_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_language_support" ADD CONSTRAINT "game_language_support_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_images" ADD CONSTRAINT "game_images_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ps_plus_offers" ADD CONSTRAINT "ps_plus_offers_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_edition" ADD CONSTRAINT "game_edition_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_versions" ADD CONSTRAINT "game_versions_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_versions" ADD CONSTRAINT "game_versions_editionId_fkey" FOREIGN KEY ("editionId") REFERENCES "game_edition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_regions" ADD CONSTRAINT "game_regions_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_regions" ADD CONSTRAINT "game_regions_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "regions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_version_regions" ADD CONSTRAINT "game_version_regions_SKU_fkey" FOREIGN KEY ("SKU") REFERENCES "game_versions"("SKU") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_version_regions" ADD CONSTRAINT "game_version_regions_gameRegionId_fkey" FOREIGN KEY ("gameRegionId") REFERENCES "game_regions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prices" ADD CONSTRAINT "prices_gameVersionRegionId_fkey" FOREIGN KEY ("gameVersionRegionId") REFERENCES "game_version_regions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_history" ADD CONSTRAINT "price_history_gameVersionRegionId_fkey" FOREIGN KEY ("gameVersionRegionId") REFERENCES "game_version_regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
