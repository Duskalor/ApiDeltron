import { Router } from 'express';
import { getAllDiscos } from '../controller/productosController.js';
const router = Router();

router.get('/', getAllDiscos);

export { router };
