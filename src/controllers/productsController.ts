import { Request, Response } from 'express';

import { getProduct, getProductsList } from '../services/productsService.js';

export async function getSingleProduct(req: Request, res: Response) {
  const code: string = res.locals.data.code;
  const singleProduct = await getProduct(code);
  res.status(200).send(singleProduct);
}

export async function getAllProducts(req: Request, res: Response) {
  const { limit, offset }: { limit: string; offset: string } = res.locals.data;
  const productsList = await getProductsList(limit, offset);
  res.status(200).send(productsList);
}
