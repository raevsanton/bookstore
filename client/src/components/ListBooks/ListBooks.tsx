import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';
import { getAllBooks } from '../../store/books/actions';
import { AppStateType } from '../../store/rootReducer';
import { IBook } from '../../store/books/types';
import ItemBook from '../ItemBook';
import Preloader from '../Preloader';
import { routes } from '../../common/constants/routes';

const ListBooks = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state: AppStateType) => state.books);
  const { isError, isLoading } = useSelector((state: AppStateType) => state.loading);

  React.useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  if (isLoading) return <Preloader />;

  return (
    <>
      <h1 className="main__title">My Library</h1>
      {isError && <h2 className="main__error">Failed to load books</h2>}
      <div className="main__list">
        {books.map((book: IBook) => (
          <Link to={generatePath(routes.book, { id: book.id })} key={book.id}>
            <ItemBook book={book} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListBooks;
