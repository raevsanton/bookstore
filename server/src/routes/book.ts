import { Router } from 'express'
import bookController from '../controllers/BookController'

const router = Router()

router.get('/books', bookController.getAllBooks)
router.get('/book/:id', bookController.getOneBookById)
router.post('/books/sort' , bookController.getSortedBooks)

export default router