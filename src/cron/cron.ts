import cron from 'node-cron';
import dotenv from 'dotenv';

import { getFiles, getFilesNames, saveItems } from '../services/cronService.js';

dotenv.config();

// cron.schedule('0 3 * * *', async () => {
//   try {
//     console.log('Starting CRON...');
//     const filesNames: string[] = await getFilesNames();
//     const files = getFiles(filesNames);
//     console.log('CRON finished!');
//   } catch (e) {
//     console.log(e);
//   }
// });

async function cronFunction() {
  try {
    console.log('Starting CRON...');
    const filesNames: string[] = await getFilesNames();
    // await getFiles(filesNames);
    await saveItems(filesNames);
    console.log('CRON finished!');
  } catch (e) {
    console.log(e);
  }
}

cronFunction();
