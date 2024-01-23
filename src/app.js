import express from 'express';
import cors from 'cors';
import { connectedDB } from './utils/db.js';
import { router } from './route/index.js';

const PORT = 5000;
const app = express();
app.use(cors());

app.use('/', router);

connectedDB().then(() => {
  console.log('Conectado a la base de datos');
  app.listen(PORT, () => {
    console.log(`escuchando por el puerto ${PORT} `);
  });
});
