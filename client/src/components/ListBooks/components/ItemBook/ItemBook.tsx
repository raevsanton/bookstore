import React from 'react';
import './itemBook.scss';
import { Book } from '../../store/books/types';

interface Props {
  book: Book;
}

export const ItemBook = (props: Props): React.ReactElement => {
  const { book: { cover, title, authors } } = props;
  return (
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
};
