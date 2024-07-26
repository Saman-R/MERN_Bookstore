import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

//Getting data in database
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields title, author, publish.year',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
//To get all books
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//To get one book  by Id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const books = await Book.findById(id);
        return response.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Updating a book by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const result = await Book.findByIdAndUpdate(
            id, { title, author, publishYear }, { new: true }
        );

        if (!result) {
            return res.status(404).send({
                message: 'Book not found',
            });
        }

        return res.status(202).send({
            message: 'Book updated successfully',
            updatedBook: result
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Deleting a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({
                message: 'Book not found',
            });
        }
        return res.status(202).send({ message: 'Book deleted successfully' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

export default router;