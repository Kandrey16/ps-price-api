import { Injectable } from '@nestjs/common';
import { GameImageRepository } from '../../repository/gameImage.repository';
import { ImageType } from '@prisma/client';
import { IGame } from 'src/games/dto/game.interface';

@Injectable()
export class GameImageService {
  constructor(private readonly gameImageRepo: GameImageRepository) {}

  async saveImage(url: string, game: IGame, type: ImageType) {
    return this.gameImageRepo.saveImage(url, game, type);
  }
}
