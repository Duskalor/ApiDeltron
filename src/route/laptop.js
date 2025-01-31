import { Router } from 'express';
import {
  GenerateExcelLaptops,
  getAllLaptop,
} from '../controller/productosController.js';
const router = Router();

router.get('/', getAllLaptop);
router.get('/excel', GenerateExcelLaptops);
export { router };
