import { findProduct } from '../repositories/productsService.js';

export async function getProduct(code: string) {
  const singleProduct = await findProduct(code);
  return singleProduct;
}
