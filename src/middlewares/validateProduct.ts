import { Request, Response, NextFunction } from 'express';

import { findProduct } from '../repositories/productsRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

export async function validateProduct(req: Request, res: Response, next: NextFunction) {
  const code: number = res.locals.params.code;
  const userProduct = await findProduct(code);
  if (!userProduct) throw notFoundError('Product not found');

  next();
}
