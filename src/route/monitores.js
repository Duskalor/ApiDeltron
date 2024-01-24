import { Router } from 'express';
import { getAllMonitores } from '../controller/productosController.js';
const router = Router();

router.get('/', getAllMonitores);

export { router };
