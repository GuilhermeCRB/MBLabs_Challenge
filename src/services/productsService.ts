import { CreateItem } from '../factories/cronFactory.js';
import { notFoundError } from '../utils/errorUtils.js';
import { OptionalEntity } from '../utils/optionalEntityUtil.js';
import {
  findProduct,
  findManyProducts,
  updateFoundProduct,
  deleteFoundProduct,
} from '../repositories/productsRepository.js';

export async function getProduct(code: number) {
  const singleProduct = await findProduct(code);
  if (!singleProduct) throw notFoundError('Product not found');
  return singleProduct;
}

export async function getProductsList(limit: string, offset: string) {
  const singleProduct = await findManyProducts(limit, offset);
  return singleProduct;
}

export async function updateUserProduct(code: number, data: OptionalEntity<CreateItem>) {
  await updateFoundProduct(code, { ...data, last_modified_t: Date.now() });
}

export async function deleteUserProduct(code: number) {
  await deleteFoundProduct(code);
}
