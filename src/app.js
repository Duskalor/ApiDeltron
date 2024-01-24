import express from 'express';
import cors from 'cors';
import { connectedDB } from './utils/db.js';
import { router } from './route/index.js';
import helmet from 'helmet';
import morgan from 'morgan';

const PORT = process.env.PORT || 1234;
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('common'));

app.use('/productos', router);

connectedDB().then(() => {
  console.log('Conectado a la base de datos');
  app.listen(PORT, () => {
    console.log(`escuchando por el puerto ${PORT} `);
  });
});
