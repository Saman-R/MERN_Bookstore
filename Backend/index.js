import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware to handle CORS policy
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

// Creating the server
app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Server Running');
});

// Use the books router
app.use('/books', booksRoute);

// Connect Mongoose
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`App is listening on Port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
