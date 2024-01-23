import { productosModel } from '../model/productosModel.js';

export const getAllProductos = async (req, res) => {
  const Alldata = await productosModel.find();
  res.json(Alldata);
};
