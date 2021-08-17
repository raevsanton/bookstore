import { Router } from 'express';
import booksController from '../controllers/BookController';

const router = Router();

router.get('/books', booksController.getAllBooks);
router.get('/books/:id', booksController.getOneBookById);
router.post('/books/sort', booksController.getSortedBooks);
router.delete('/books/:id', booksController.deleteOneBookById);

export default router;