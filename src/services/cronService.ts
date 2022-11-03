import fs from 'fs';
import zlib from 'zlib';

import { fetchNames, getStream } from '../repositories/cronRepository.js';

export async function getFilesNames() {
  const data = await fetchNames();
  const lines: string[] = data.trim().split(/\r?\n/);
  return lines;
}

export async function getFiles(filesNames) {
  await Promise.all(
    filesNames.map(async (fileName) => {
      console.log('Downloading file: ', fileName);

      const path = 'data/' + fileName;
      const writableStream = fs.createWriteStream(path.replace('.gz', ''));
      const URL = process.env.OPEN_FOOD_BASE_URL + fileName;

      try {
        const httpStream = await getStream(URL, {
          'accept-encoding': 'gzip',
        });

        await new Promise((resolve, reject) => {
          const inputStream = httpStream.pipe(zlib.createGunzip()).pipe(writableStream);
          inputStream
            .on('finish', () => {
              writableStream.close();
              console.log('File downloaded and unzipped: ' + fileName);
              resolve(fileName);
            })
            .on('error', (error: Error) => {
              reject(error);
            });
        });
      } catch (error) {
        console.log('Error when trying to GET files.\n', error);
      }
    }),
  );
}
