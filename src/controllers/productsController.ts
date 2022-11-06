import { Request, Response } from 'express';
import { CreateItem } from '../factories/cronFactory.js';

import { deleteUserProduct, getProduct, getProductsList, updateUserProduct } from '../services/productsService.js';
import { OptionalEntity } from '../utils/optionalEntityUtil.js';

export async function getSingleProduct(req: Request, res: Response) {
  const code: number = res.locals.params.code;
  const singleProduct = await getProduct(code);
  res.status(200).send(singleProduct);
}

export async function getAllProducts(req: Request, res: Response) {
  const { limit, offset }: { limit: string; offset: string } = res.locals.query;
  const productsList = await getProductsList(limit, offset);
  res.status(200).send(productsList);
}

export async function updateProduct(req: Request, res: Response) {
  const code: number = res.locals.params.code;
  const data: OptionalEntity<CreateItem> = res.locals.body;
  await updateUserProduct(code, data);
  res.sendStatus(200);
}

export async function deleteProduct(req: Request, res: Response) {
  const code: number = res.locals.params.code;
  await deleteUserProduct(code);
  res.sendStatus(204);
}
