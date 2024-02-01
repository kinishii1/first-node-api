import express from 'express';
import Books from './bookRoutes.js';
import Author from './authorRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('Hello, World!');
  });

  app.use(express.json(), Books, Author);
}

export default routes;