import { Injectable } from '@nestjs/common';
import { Page } from 'puppeteer';

@Injectable()
export class PsStoreSource {

  async openPsStoreGame(
    page: Page,
    psRegion: string,
    slug: string,
  ): Promise<string> {
    const url = `https://www.playstation.com/${psRegion}/games/${slug}/`;
    console.log(url);

    const resp = await page.goto(url, { waitUntil: 'domcontentloaded' });

    if (!resp || resp.status() !== 200) return null;

    await page.waitForSelector('[data-qa^="gameInfo#"]', {
      timeout: 90000,
    });
  }
}
