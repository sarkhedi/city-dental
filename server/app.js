import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default Route
app.get('/', (req, res) => {
  res.send('Apna Dentist API is running...');
});

// Error Handling Middleware
app.use(errorHandler);

export default app;
