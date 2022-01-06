import express from 'express';
import booksRouter from './routes/books';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/api/v1/', booksRouter);

app.listen(PORT);
