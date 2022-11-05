import router from 'express';

import { getSingleProduct, getAllProducts, updateProduct } from '../controllers/productsController.js';
import { sanitizeInputs } from '../middlewares/sanitizeInputs.js';

const products = router();

products
  .get('/products/:code', sanitizeInputs(), getSingleProduct)
  .get('/products', sanitizeInputs(), getAllProducts)
  .put('/products/:code', sanitizeInputs(), updateProduct);
export default products;
