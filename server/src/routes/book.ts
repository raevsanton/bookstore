import { Router } from 'express'
import bookController from '../controllers/BookController'

const router = Router()

router.get('/books', bookController.getAllBooks)
router.get('/book/:id', bookController.getOneBookById)

export default router