import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id : {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  age : {
    type: Number,
  }
} , {versionKey: false});

const Author = mongoose.model('Author', authorSchema);

export { Author, authorSchema }