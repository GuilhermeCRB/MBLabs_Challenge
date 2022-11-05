import cron from 'node-cron';
import dotenv from 'dotenv';

import { getFiles, getFilesNames, saveItems } from '../services/cronService.js';

dotenv.config();

export let lastCronTime: Date | string = 'First CRON schedule to 3AM';

export default function startCron() {
  cron.schedule('0 3 * * *', async () => {
    try {
      console.log('Starting CRON...');
      lastCronTime = new Date();
      const filesNames: string[] = await getFilesNames();
      await getFiles(filesNames);
      await saveItems(filesNames);
      console.log('CRON finished!');
    } catch (e) {
      console.log(e);
    }
  });
}
