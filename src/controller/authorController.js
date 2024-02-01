import { Author } from '../models/Author.js';

class AuthorController {

  static async getAuthors(req, res) {
    try {
      const author = await Author.find();
      res.status(200).json(author);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addAuthor(req, res) {
    try {
      const newAuthor = await Author.create(req.body);
      res.status(201).json({ message: 'Author added successfully', author: newAuthor});
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAuthor(req, res) { 
    try {
      const id = req.params.id;
      const author = await Author.findById(id);
      res.status(200).json(author);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await Author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: `Author ${id} updated successfully`});
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async deleteAuthor(req, res) {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: `Author ${id} deleted successfully`});
  }
}

export default AuthorController;