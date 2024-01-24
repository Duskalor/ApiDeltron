import { Router } from 'express';
import { getAllPlaca } from '../controller/productosController.js';
const router = Router();

router.get('/', getAllPlaca);

export { router };
