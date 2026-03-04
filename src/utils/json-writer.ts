import * as fs from 'fs/promises';
import * as path from 'path';

export async function writeJsonFile(
  dir: string,
  filename: string,
  data: unknown,
) {
  await fs.mkdir(dir, { recursive: true });

  const filePath = path.join(dir, filename);

  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

  return filePath;
}



