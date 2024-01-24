import { Router } from 'express';
import { getAllProcesadores } from '../controller/productosController.js';
const router = Router();

router.get('/', getAllProcesadores);

export { router };
