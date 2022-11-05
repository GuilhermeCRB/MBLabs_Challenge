import db from '../config/database.js';

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
