import cron from 'node-cron';
import axios from 'axios';

export async function setApiDetails() {
  cron.schedule('0 3 * * *', async () => {
    const filesNames: string[] = await getFilesNames();
  });
}

async function getFilesNames() {
  try {
    const { data } = await axios.get('https://challenges.coode.sh/food/data/json/index.txt');
    const lines: string[] = data.split(/\r?\n/);
    lines.pop();
    return lines;
  } catch (e) {
    console.log(e);
    return;
  }
}
