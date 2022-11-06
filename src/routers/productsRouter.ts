import router from 'express';

import { getSingleProduct, getAllProducts, updateProduct, deleteProduct } from '../controllers/productsController.js';
import { sanitizeInputs } from '../middlewares/sanitizeInputs.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import productSchema from '../schemas/productSchema.js';

const products = router();

products
  .get('/products/:code', sanitizeInputs(), getSingleProduct)
  .get('/products', sanitizeInputs(), getAllProducts)
  .put('/products/:code', sanitizeInputs(), validateSchema(productSchema), updateProduct)
  .delete('/products/:code', sanitizeInputs(), deleteProduct);
export default products;
