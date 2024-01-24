import { Router } from 'express';
import { getAllLaptop } from '../controller/productosController.js';
const router = Router();

router.get('/', getAllLaptop);

export { router };
