import { Router } from 'express';

import { getApiDetails } from '../controllers/apiDetailsController.js';

const apiDetails = Router();

apiDetails.get('/', getApiDetails);

export default apiDetails;
