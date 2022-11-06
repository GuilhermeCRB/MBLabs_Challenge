import db from '../config/database.js';
import { CreateItem } from '../factories/cronFactory.js';
import { OptionalEntity } from '../utils/optionalEntityUtil.js';

export async function findProduct(code: number) {
  return await db.item.findFirst({
    where: {
      status: { not: 'trash' },
      code,
    },
  });
}

export async function findManyProducts(limit = '10', offset = '0') {
  return await db.item.findMany({
    where: { status: { not: 'trash' } },
    take: Number(limit),
    skip: Number(offset),
  });
}

export async function updateFoundProduct(code: number, data: OptionalEntity<CreateItem>) {
  return await db.item.update({
    where: { code },
    data,
  });
}

export async function deleteFoundProduct(code: number) {
  return await db.item.update({
    where: { code },
    data: { status: 'trash' },
  });
}

export const productsRepository = {
  findProduct,
  findManyProducts,
  updateFoundProduct,
  deleteFoundProduct,
};
