import { Request, Response } from 'express';

import { setApiDetails } from '../services/apiDetailsService.js';

export async function getApiDetails(req: Request, res: Response) {
  const apiDetails = await setApiDetails();
  res.status(200).send(apiDetails);
}
