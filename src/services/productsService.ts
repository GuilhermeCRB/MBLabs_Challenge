import { CreateItem } from '../factories/cronFactory.js';
import { notFoundError } from '../utils/errorUtils.js';
import { OptionalEntity } from '../utils/optionalEntityUtil.js';
import { findProduct, findManyProducts, updateFoundProduct } from '../repositories/productsRepository.js';

export async function getProduct(code: string) {
  const singleProduct = await findProduct(code);
  if (!singleProduct) throw notFoundError('Product not found');
  return singleProduct;
}

export async function getProductsList(limit: string, offset: string) {
  const singleProduct = await findManyProducts(limit, offset);
  return singleProduct;
}

export async function updateUserProduct(code: string, data: OptionalEntity<CreateItem>) {
  const userProduct = await findProduct(code);
  if (!userProduct) throw notFoundError('Product not found');
  await updateFoundProduct(code, { ...data, last_modified_t: String(Date.now()) });
}
