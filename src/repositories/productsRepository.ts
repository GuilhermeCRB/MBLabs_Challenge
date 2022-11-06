import db from '../config/database.js';
import { CreateItem } from '../factories/cronFactory.js';
import { OptionalEntity } from '../utils/optionalEntityUtil.js';

export async function findProduct(code: string) {
  return await db.item.findFirst({
    where: {
      code,
    },
  });
}

export async function findManyProducts(limit: string, offset: string) {
  return await db.item.findMany({
    take: Number(limit),
    skip: Number(offset),
  });
}

export async function updateFoundProduct(code: string, data: OptionalEntity<CreateItem>) {
  return await db.item.update({
    where: { code },
    data,
  });
}

export async function deleteFoundProduct(code: string) {
  return await db.item.update({
    where: { code },
    data: { status: 'trash' },
  });
}
