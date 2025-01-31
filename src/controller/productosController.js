import { productosModel } from '../model/productosModel.js';
import { ExcelGenerator } from '../services/laptop.service.js';

export const getAllDiscos = async (req, res) => {
  const Alldata = await productosModel.find({ categoria: 'Disco' });
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

export const GenerateExcelLaptops = async (req, res) => {
  const Alldata = await productosModel.find({ categoria: 'Laptop' });
  const newData = Alldata.map(({ _doc }) => ({
    ..._doc,
    nombre: _doc.nombre.replace(/\b(Notebook|NOTEBOOK|NB|nb)\b/g, '').trim(),
    precio: parseFloat(_doc.precio.replace(',', '')),
  })).sort((a, b) => a.precio - b.precio);

  await ExcelGenerator(newData);
  res.json('Generado el excel');
};
