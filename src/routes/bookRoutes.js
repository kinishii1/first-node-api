import express from 'express';
import BookController from '../controller/bookController.js';

const routes = express.Router();

routes.get('/books', BookController.getBooks);
routes.get('/books/:id', BookController.getBook);
routes.post('/books', BookController.addBook);
routes.put('/books/:id', BookController.updateBook);
routes.delete('/books/:id', BookController.deleteBook);

export default routes;