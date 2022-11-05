import db from '../config/database.js';

import { controllCollection } from '@prisma/client';

type TestItem = Omit<controllCollection, 'id'>;

export async function testInsert(testItem: TestItem) {
  await db.controllCollection.create({
    data: testItem,
  });
}

export async function testReading(testItem: TestItem) {
  return await db.controllCollection.findFirst({
    where: testItem,
  });
}

export async function deleteItem(testItem: TestItem) {
  await db.controllCollection.delete({
    where: testItem,
  });
}
