import { Router } from 'express';

import cronRouter from './apiDetailsRouter.js';

const router = Router();

router.use(cronRouter);

export default router;
