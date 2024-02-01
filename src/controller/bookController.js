import Book from '../models/Book.js';
import { Author } from '../models/Author.js';

class BookController {

  static async getBooks(req, res) {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addBook(req, res) {
    const newBook = req.body;
    try {
      const foundAuthor = await Author.findById(newBook.author);
      const bookCompleted  = { ...newBook, author: { ... foundAuthor._doc } };
      const bookCreated = await Book.create(bookCompleted);
      res.status(201).json(bookCreated);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getBook(req, res) { 
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await Book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: `Book ${id} updated successfully`});
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async deleteBook(req, res) {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: `Book ${id} deleted successfully`});
  }
}

export default BookController;