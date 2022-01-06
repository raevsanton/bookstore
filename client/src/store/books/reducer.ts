import { Book, IBooks } from './types';
import { BOOKS_ACTIONS } from './consts';

const initialState: IBooks = {
  list: [],
  book: null,
  parameters: {},
  error: false,
  loaded: false,
};

export const booksReducer = (state: IBooks = initialState, action: FSA<string>): IBooks => {
  switch (action.type) {
    case BOOKS_ACTIONS.FETCH_BOOKS: {
      const { error, payload } = action as FSA<typeof BOOKS_ACTIONS.FETCH_BOOKS, Book[]>;
      return {
        ...state,
        list: error ? [] : payload,
        loaded: true,
        error,
      };
    }
    case BOOKS_ACTIONS.FETCH_ONE_BOOK: {
      const { error, payload } = action as FSA<typeof BOOKS_ACTIONS.FETCH_ONE_BOOK, Book>;
      return {
        ...state,
        book: error ? null : payload,
        loaded: true,
        error,
      };
    }
    case BOOKS_ACTIONS.BOOK_REMOVE: {
      const {
        error,
        payload: { id: bookId },
      } = action as FSA<typeof BOOKS_ACTIONS.BOOK_REMOVE, any>;
      return {
        ...state,
        list: error ? null : state.list.filter(({ id }: Book) => id !== bookId),
      };
    }
    case BOOKS_ACTIONS.BOOK_CLEAR_STORE:
      return {
        ...state,
        book: null,
      };
    case BOOKS_ACTIONS.SET_PARAMETERS: {
      const parameters = action.payload;
      return {
        ...state,
        parameters,
      };
    }
    case BOOKS_ACTIONS.SET_LOADING_STATUS: {
      const { payload } = action as FSA<typeof BOOKS_ACTIONS.SET_LOADING_STATUS, boolean>;
      return {
        ...state,
        loaded: payload,
      };
    }
    default: {
      return state;
    }
  }
};
