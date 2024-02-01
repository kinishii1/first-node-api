import express from 'express';
import AuthorController from '../controller/authorController.js';

const routes = express.Router();

routes.get('/authors', AuthorController.getAuthors);
routes.get('/authors/:id', AuthorController.getAuthor);
routes.post('/authors', AuthorController.addAuthor);
routes.put('/authors/:id', AuthorController.updateAuthor);
routes.delete('/authors/:id', AuthorController.deleteAuthor);

export default routes;