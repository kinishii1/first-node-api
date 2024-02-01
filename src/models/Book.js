import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const BookSchema = new mongoose.Schema({
  id : {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  editor : {
    type: String,
  },
  pages : {
    type: Number,
  },
  price : {
    type: Number,
  },
  author: authorSchema
} , {versionKey: false});

export default mongoose.model('books', BookSchema);