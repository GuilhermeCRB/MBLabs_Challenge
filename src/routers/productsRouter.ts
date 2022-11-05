import router from 'express';

import { getSingleProduct } from '../controllers/productsController.js';

const products = router();

products.get('/products/:code', getSingleProduct);

export default products;
