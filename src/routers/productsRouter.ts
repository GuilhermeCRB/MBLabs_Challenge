import router from 'express';

import { getSingleProduct, getAllProducts } from '../controllers/productsController.js';
import { sanitizeInputs } from '../middlewares/sanitizeInputs.js';

const products = router();

products
  .get('/products/:code', sanitizeInputs(['code']), getSingleProduct)
  .get('/products', sanitizeInputs(['limit', 'offset']), getAllProducts);

export default products;
