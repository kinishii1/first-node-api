import mongoose from 'mongoose';

const dbConnect = async () => {
  mongoose.connect(process.env.MONGO_URI); 
  return mongoose.connection;
}

export default dbConnect;