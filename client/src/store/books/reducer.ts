import { AnyAction } from 'redux';
import { IBook } from './types';
import { BookActions } from './consts';

interface IInitialStateBooks {
  books: IBook[];
  book: IBook;
}

const initialState: IInitialStateBooks = {
  books: [],
  book: null,
};

export const booksReducer = (state = initialState, action: AnyAction): IInitialStateBooks => {
  switch (action.type) {
    case BookActions.BOOKS_SUCCESS:
      return {
        ...state,
        books: action.books,
      };
    case BookActions.BOOK_SUCCESS:
      return {
        ...state,
        book: action.book,
      };
    case BookActions.BOOK_REMOVE:
      return {
        ...state,
        books: state.books.filter((book: IBook) => book.id !== action.bookId),
      };
    case BookActions.BOOK_CLEAR_STORE:
      return {
        ...state,
        book: null,
      };
    default: {
      return state;
    }
  }
};
