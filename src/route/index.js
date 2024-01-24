import { Router } from 'express';
import { readdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PATH_DIR = `${__dirname}`;

const cleanName = (name) => name.split('.').shift();

readdirSync(PATH_DIR).filter((response) => {
  const name = cleanName(response);
  if (name !== 'index') {
    import(`./${name}.js`).then((module) => {
      router.use(`/${name}`, module.router);
    });
  }
});

export { router };
