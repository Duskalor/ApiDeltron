import { Router } from 'express';
import { getAllProductos } from '../controller/productosController.js';
const router = Router();

router('/', getAllProductos);

export { router };
