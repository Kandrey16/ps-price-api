import { Injectable } from '@nestjs/common';
import { PuppeteerService } from './puppeteer/puppeteer.service';
import { PsDealsSource } from './sources/ps_deals/ps_deals.source';
import { PsStoreSource } from './sources/ps_store/ps_store.source';
import {
  extractPsDealsRaw,
  normalizePsDeals,
} from './sources/ps_deals/ps_deals.extractor';
import { REGION_MAP } from '../utils/region_map';
import { LoggerService } from 'src/logger/logger.service';
import * as path from 'path';
import { writeJsonFile } from 'src/utils/json-writer';
import { extractPsStoreGame } from './sources/ps_store/ps_store.extractor';

@Injectable()
export class ParcerService {
  constructor(
    private readonly puppetier: PuppeteerService,
    private readonly psDealsSource: PsDealsSource,
    private readonly psStoreSource: PsStoreSource,
    private readonly logger: LoggerService,
  ) {}

  async parsePsDeals(): Promise<{ file: string; count: number }> {
    const page = await this.puppetier.createPage();
    await this.psDealsSource.openPsDealsAllGames(page);

    const rawGames = await page.evaluate(extractPsDealsRaw);
    const games = normalizePsDeals(rawGames);

    for (const game of games) {
      const psRegion = REGION_MAP[game.region];
      if (!psRegion) continue;
      const p = await this.puppetier.createPage();
      try {
        this.logger.debug('Debug: ', { p, psRegion, game });
        await this.psStoreSource.openPsStoreGame(p, psRegion, game.slug);

        const extra = await p.evaluate(extractPsStoreGame);
        Object.assign(game, extra);
      } catch (error) {
        this.logger.error('parcing error: ', error);
        console.log(error);
      } finally {
        await p.close();
      }
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const outDir = path.resolve(process.cwd(), 'data/parsing/ps-deals');
    const fileName = `ps-deals-${timestamp}.json`;

    const filePath = await writeJsonFile(outDir, fileName, games);

    this.logger.info('Parsing completed', {
      gamesCount: games.length,
      outputFile: filePath,
    });

    await this.puppetier.closeBrowser();

    return {
      count: games.length,
      file: filePath,
    };
  }
}
