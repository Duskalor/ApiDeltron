import { productosModel } from '../model/productosModel.js';

export const getAllDiscos = async (req, res) => {
  const Alldata = await productosModel.find({ categoria: 'Disco' });
  console.log(Alldata);
  res.json(Alldata);
};
export const getAllProcesadores = async (req, res) => {
  const Alldata = await productosModel.find({ categoria: 'Procesador' });
  res.json(Alldata);
};
export const getAllMonitores = async (req, res) => {
  const Alldata = await productosModel.find({ categoria: 'Monitores' });
  res.json(Alldata);
};
export const getAllLaptop = async (req, res) => {
  const Alldata = await productosModel.find({ categoria: 'Laptop' });
  res.json(Alldata);
};
export const getAllPlaca = async (req, res) => {
  const Alldata = await productosModel.find({ categoria: 'Placa madre' });
  res.json(Alldata);
};
export const getAllRam = async (req, res) => {
  const Alldata = await productosModel.find({ categoria: 'Memoria ram' });
  res.json(Alldata);
};
