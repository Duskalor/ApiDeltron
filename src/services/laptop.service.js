import { utils, writeFile } from 'xlsx';
const ranges = [
  { max: 3000, percent: 10 },
  { max: 4000, percent: 9 },
  { max: 5000, percent: 8 },
  { max: 6000, percent: 7 },
  { max: 7000, percent: 6 },
  { max: 8000, percent: 5 },
  { max: 9000, percent: 4 },
  { max: 10000, percent: 3 },
  { max: 11000, percent: 2 },
  { max: 15000, percent: 1 },
  { max: Infinity, percent: 0 },
];
export const ExcelGenerator = async (data) => {
  const filteredData = data.map((item) => {
    const getPrice = (price) => {
      const { percent } = ranges.find((range) => price <= range.max);
      const ganacioPrice = price * (percent / 100);
      return (price + ganacioPrice).toLocaleString('es-PE', {
        style: 'currency',
        currency: 'PEN',
      });
    };

    return {
      nombre: item.nombre,
      ['precio unitario']: item.precio ? getPrice(item.precio) : 0,
      imagen: item.bigimg ? item.bigimg[0] : item.img,
      codigo: item.codigo,
    };
  });

  const ws = utils.json_to_sheet(filteredData);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'laptops');
  writeFile(wb, 'Proforma_laptops.xlsx');
};
