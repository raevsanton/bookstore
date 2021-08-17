import React from 'react';
import './itemBook.scss';
import { IBook } from '../../store/books/types';

interface IProps {
  book: IBook;
}

const ItemBook = (props: IProps) => {
  const { book } = props;
  return (
    <div className="book__item">
      <div>
        <img src={book.cover} alt="cover" />
      </div>
      <div className="book__info">
        <h4>{book.title}</h4>
        {book.authors.map((author: string) => <p key={author}>{author}</p>)}
      </div>
    </div>
  );
};

export default ItemBook;
