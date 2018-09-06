import express from 'express';
import dotenv from 'dotenv';
import next from 'next';
import mongoose from 'mongoose';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const MONGO_URL = process.env.MONGO_URL_TEST;

mongoose.connect(MONGO_URL);

const port = process.env.PORT || 8000;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${port}`;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    const user = { email: 'ivanaimufua41@gmail.com' };
    app.render(req, res, '/', { user });
  });
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Read captain! ${ROOT_URL}`); // eslint-disable-line no-console
  });
});
