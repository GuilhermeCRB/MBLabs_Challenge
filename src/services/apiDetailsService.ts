import { controllCollection } from '@prisma/client';

import { lastCronTime } from '../cron/cron.js';
import { deleteItem, testInsert, testReading } from '../repositories/apiDetailsRepository.js';
import { onlineSince } from '../server.js';

export async function setApiDetails() {
  const apiDetails = {
    isDbConnectionOk: await testDbConnection(),
    lastCronTime,
    onlineSince,
    memoryUsage: process.memoryUsage(),
  };
  return apiDetails;
}

async function testDbConnection() {
  try {
    const testItem = { test: 'test' };
    await testInsert(testItem);
    const dbItem: controllCollection = await testReading(testItem);

    if (dbItem) {
      await deleteItem(testItem);
      return 'Ok';
    } else {
      return 'Database connection failed.';
    }
  } catch (e) {
    console.log('Error while testing database connection.\n\n', e);
    return e;
  }
}
