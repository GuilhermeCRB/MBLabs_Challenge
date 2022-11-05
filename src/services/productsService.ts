import { findProduct, findManyProducts } from '../repositories/productsRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

export async function getProduct(code: string) {
  const singleProduct = await findProduct(code);
  if (!singleProduct) throw notFoundError('Product code not found');
  return singleProduct;
}

export async function getProductsList(limit: string, offset: string) {
  const singleProduct = await findManyProducts(limit, offset);
  return singleProduct;
}
