import { Router } from 'express';

import cronRouter from './apiDetailsRouter.js';
import products from './productsRouter.js';

const router = Router();

router.use(cronRouter).use(products);

export default router;
