import { Injectable } from '@nestjs/common';
import { Page } from 'puppeteer';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class PsDealsSource {
  constructor(private readonly logger: LoggerService) {}

  async openPsDealsAllGames(page: Page, region = 'tr-store') {
    this.logger.info('open ps deals', { region });

    const url = `https://psdeals.net/${region}/all-games?sort=recently-added&contentType%5B%5D=games&watchlistRank=top50`;
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const html = await page.content();

    this.logger.debug('psdeals html snippet', {
      snippet: html.slice(0, 500),
    });

    if (!html.includes('game')) {
      throw new Error('Page loaded, but no game-related content found');
    }

    await page.waitForSelector('.game-collection-item', { timeout: 60000 });

    console.log('games list loaded');
  }
}
