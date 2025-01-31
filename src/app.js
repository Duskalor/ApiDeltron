import express from 'express';
import cors from 'cors';
import { connectedDB } from './utils/db.js';
import { router } from './route/index.js';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 1234;
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('common'));

app.get('/', async (req, res) => {
  res.json('Hola a todos esta es la Api de Deltron');
});
app.use('/productos', router);

connectedDB().then(() => {
  console.log('Conectado a la base de datos');
  app.listen(PORT, () => {
    console.log(`escuchando por el puerto ${PORT} `);
  });
});
