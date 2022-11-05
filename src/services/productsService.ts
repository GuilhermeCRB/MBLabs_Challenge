import { findProduct } from '../repositories/productsService.js';
import { notFoundError } from '../utils/errorUtils.js';

export async function getProduct(code: string) {
  const singleProduct = await findProduct(code);
  if (!singleProduct) throw notFoundError('Product code not found');
  return singleProduct;
}
