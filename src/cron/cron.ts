import cron from 'node-cron';
import dotenv from 'dotenv';

import { getFiles, getFilesNames, saveItems } from '../services/cronService.js';

dotenv.config();

export default function startCron() {
  cron.schedule('0 3 * * *', async () => {
    try {
      console.log('Starting CRON...');
      const filesNames: string[] = await getFilesNames();
      await getFiles(filesNames);
      await saveItems(filesNames);
      console.log('CRON finished!');
    } catch (e) {
      console.log(e);
    }
  });
}
