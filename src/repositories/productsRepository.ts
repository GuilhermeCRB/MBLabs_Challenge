import db from '../config/database.js';
import { CreateItem } from '../factories/cronFactory.js';
import { OptionalEntity } from '../utils/optionalEntityUtil.js';

export async function findProduct(code: string) {
  return await db.item.findFirst({
    where: {
      status: { not: 'trash' },
      code,
    },
  });
}

export async function findManyProducts(limit: string, offset: string) {
  return await db.item.findMany({
    where: { status: { not: 'trash' } },
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
