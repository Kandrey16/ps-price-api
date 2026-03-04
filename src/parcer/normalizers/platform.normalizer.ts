import { Platform } from '@prisma/client';

export function normalizePlatform(text: string): Platform {
  if (!text) return null;
  if (text.includes('PS4') && text.includes('PS5')) return 'PS4_PS5';
  if (text.includes('PS5')) return 'PS5';
  if (text.includes('PS4')) return 'PS4';
}
