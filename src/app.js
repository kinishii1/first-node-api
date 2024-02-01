import express from 'express';
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js';

const conection = await dbConnect();
conection.on('error', (error) => console.log('Error connecting to the database' + error));
conection.once('open', () => console.log('Connected to the database'));

const app = express();
routes(app);

export default app;
