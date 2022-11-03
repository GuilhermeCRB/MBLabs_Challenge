import fs from 'fs';
import zlib from 'zlib';
import events from 'events';
import readline from 'readline';

import { fetchNames, getStream, persistItem } from '../repositories/cronRepository.js';
import formatItem, { CreateItem } from '../factories/cronFactory.js';

export async function getFilesNames() {
  const data: string = await fetchNames();
  const lines: string[] = data.trim().split(/\r?\n/);
  return lines;
}

export async function getFiles(filesNames: string[]) {
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
              console.log('File ready: ', fileName);
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

export async function saveItems(filesNames: string[]) {
  await Promise.all(
    filesNames.map(async (fileName) => {
      console.log(`Started reading items from ${fileName}.`);
      const path = 'data/' + fileName;
      const readableStream = fs.createReadStream(path.replace('.gz', ''));
      const limit = 100;
      let counter = 0;
      try {
        const rl = readline.createInterface({
          input: readableStream,
          crlfDelay: Infinity,
        });

        for await (const line of rl) {
          if (counter < limit) {
            const item: CreateItem = formatItem(line);
            console.log(`Line: ${counter + 1} of`, fileName);
            await persistItem(item);
            counter++;
          } else {
            rl.close();
            readableStream.destroy();
          }
        }

        await events.once(rl, 'close');
        console.log(`\nItems from file ${fileName} saved on database.\n`);
      } catch (error) {
        console.log('\nError when trying to SAVE items to database.\n', error);
      }
    }),
  );
}
