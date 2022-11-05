import router from 'express';

import { getSingleProduct } from '../controllers/productsController.js';
import { sanitizeInputs } from '../middlewares/sanitizeInputs.js';

const products = router();

products.get('/products/:code', sanitizeInputs(['code']), getSingleProduct);

export default products;
