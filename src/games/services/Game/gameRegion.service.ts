import { Injectable } from '@nestjs/common';
import { GameRegionRepository } from '../../repository/gameRegion.repository';
import { GamePriceRepository } from '../../repository/gamePrice.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { IGame } from 'src/games/dto/game.interface';

@Injectable()
export class GameRegionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gameRegionRepo: GameRegionRepository,
    private readonly gamePriceRepo: GamePriceRepository,
  ) {}

  async getOrCreate(game: IGame, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;
    const regionCode = game.region.replace(/-store$/i, '').toLowerCase();
    const strRegion = String(game.regionId);

    const region = this.gameRegionRepo.findByCode(regionCode);

    if (!region) throw new Error(`Unknown region ${game.region}`);

    const gameVersionRegion = this.gameRegionRepo.upsertVersionRegion(
      strRegion,
      region,
      game,
      client,
    );

    const gamePrice = this.gamePriceRepo.upsert(game, gameVersionRegion);

    return {
      gameVersionRegion,
      gamePrice,
    };
  }
}
