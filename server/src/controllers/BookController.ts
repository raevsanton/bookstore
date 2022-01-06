import { Request, Response } from 'express';
import pool from '../database/db';

class BooksController {
  async getAllBooks({ query: { sort } }: Request, res: Response) {
    try {
      switch (sort) {
        case 'price_desc':
          res.json(await pool.query('SELECT * FROM book ORDER BY price DESC').then(({ rows }) => rows));
          break;
        case 'price_asc':
          res.json(await pool.query('SELECT * FROM book ORDER BY price ASC').then(({ rows }) => rows));
          break;
      }
      res.json(await pool.query('SELECT * FROM book').then(({ rows }) => rows));
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  }

  async getOneBookById({ params: { id } }: Request, res: Response) {
    res.json(
      await pool.query('SELECT * FROM book where id = $1', [id]).then(({ rows }) => rows[0]),
    );
  }

  async deleteOneBookById({ params: { id } }: Request, res: Response) {
    res.json(await pool.query('DELETE FROM book where id = $1', [id]).then(({ rows }) => rows[0]));
  }
}

export default new BooksController();
