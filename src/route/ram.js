import { Router } from 'express';
import { getAllRam } from '../controller/productosController.js';
const router = Router();

router.get('/', getAllRam);

export { router };
