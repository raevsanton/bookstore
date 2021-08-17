import express from 'express';
import booksRouter from './routes/books';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/', booksRouter);

app.listen(PORT, () => {
    console.log(`Started api service on port: ${PORT}`);
});