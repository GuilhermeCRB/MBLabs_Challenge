import cron from 'node-cron';
import dotenv from 'dotenv';

import { getFiles, getFilesNames } from '../services/cronService.js';

dotenv.config();

// cron.schedule('0 3 * * *', async () => {
//   try {
//     const filesNames: string[] = await getFilesNames();
//     const files = getFiles(filesNames);
//   } catch (e) {
//     console.log(e);
//   }
// });

async function cronFunction() {
  try {
    console.log('Starting CRON...');
    const filesNames: string[] = await getFilesNames();
    const files = await getFiles(filesNames);
    console.log(files);
    console.log('CRON finished!');
  } catch (e) {
    console.log(e);
  }
}

cronFunction();
