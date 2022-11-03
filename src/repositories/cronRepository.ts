import axios from 'axios';

import db from '../config/database.js';
import { CreateItem } from '../factories/cronFactory.js';

export async function fetchNames() {
  const { data } = await axios.get('https://challenges.coode.sh/food/data/json/index.txt');
  return data;
}

export async function getStream(URL: string, headers = {}) {
  const { data } = await axios.get(URL, {
    headers,
    responseType: 'stream',
  });

  return data;
}

export async function persistItem(item: CreateItem) {
  await db.item.create({
    data: item,
  });
}
