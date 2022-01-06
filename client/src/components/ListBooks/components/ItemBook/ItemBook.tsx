import React from 'react';
import './itemBook.scss';
import { Book } from '../../../../store/books/types';

interface Props {
  book: Book;
}

export const ItemBook = ({ book: { cover, title, authors } }: Props): React.ReactElement => (
  <div className="book__item">
    <div>
      <img src={cover} alt="cover" />
    </div>
    <div className="book__info">
      <h4>{title}</h4>
      <p>{authors.join(', ')}</p>
    </div>
  </div>
);
