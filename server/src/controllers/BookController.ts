import express from 'express'
import pool from '../database/db'

class BookController {
    async getAllBooks(req: express.Request, res: express.Response) {
        const books = await pool.query('SELECT * FROM book')
        res.json(books.rows)
    }
    async getOneBookById(req: express.Request, res: express.Response) {
        const id = req.params.id
        const book = await pool.query('SELECT * FROM book where id = $1', [id])
        res.json(book.rows[0])
    }
}

export default new BookController()