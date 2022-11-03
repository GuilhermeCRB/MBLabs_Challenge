import axios from 'axios';

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
