import { Request, Response } from 'express';
import { getProduct } from '../services/productsService.js';

export async function getSingleProduct(req: Request, res: Response) {
  const code: string = res.locals.data.code;
  const singleProduct = await getProduct(code);
  res.status(200).send(singleProduct);
}
