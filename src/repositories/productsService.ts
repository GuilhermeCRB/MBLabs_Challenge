import db from '../config/database.js';

export async function findProduct(code: string) {
  return await db.item.findFirst({
    where: {
      code,
    },
  });
}
