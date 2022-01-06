import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { apiFetcher } from '../../common/utils/fetcher';
import { apiConfig } from '../../common/constants/apiConfig';
import { Book, Parameters } from './types';
import { AppStateType } from '../rootReducer';
import { BOOKS_ACTIONS } from './consts';
import { MODAL_ACTIONS } from '../modal/consts';

type Thunk<A extends string, R> = ((dispatch: Dispatch<FSA<A, R>>, getState?: () => AppStateType) => void);

export const setParameters = (parameters: Partial<Parameters>): Thunk<string, Partial<Parameters>> => (
  dispatch: Dispatch<FSA<string, Partial<Parameters>>>,
): void => {
  dispatch({ type: BOOKS_ACTIONS.SET_PARAMETERS, payload: parameters });
};

export const setBooksLoadingStatus = (status: boolean): Thunk<string, boolean> => (
  dispatch: Dispatch<FSA<string, boolean>>,
): void => {
  dispatch({ type: BOOKS_ACTIONS.SET_LOADING_STATUS, payload: status });
};

export const fetchBooks = (): Thunk<string, unknown> => (
  dispatch: Dispatch<FSA<string, unknown>>,
  getState: () => AppStateType,
): void => {
  setBooksLoadingStatus(false)(dispatch);
  const { books: { parameters } } = getState();
  apiFetcher
    .get(apiConfig.endpoints.books.fetchBooks, {}, parameters)
    .then((res: Book[]): void => {
      dispatch({ type: BOOKS_ACTIONS.FETCH_BOOKS, payload: res });
    })
    .catch(() => {
      dispatch({ type: BOOKS_ACTIONS.FETCH_BOOKS, error: true });
    })
    .finally((): void => {
      setParameters(parameters)(dispatch);
    });
};

export const fetchBook = (id: string): Thunk<string, unknown> => (
  dispatch: Dispatch<FSA<string, unknown>>,
): void => {
  setBooksLoadingStatus(false)(dispatch);
  apiFetcher
    .get(apiConfig.endpoints.books.fetchBook.replace(':id', id))
    .then((res: Book) => {
      dispatch({ type: BOOKS_ACTIONS.FETCH_ONE_BOOK, payload: res });
    })
    .catch(() => {
      dispatch({ type: BOOKS_ACTIONS.FETCH_ONE_BOOK, error: true });
    });
};

export const deleteBook = (id: string, history: RouteComponentProps['history']): Thunk<string, unknown> => (
  dispatch: Dispatch<FSA<string, unknown>>,
): void => {
  apiFetcher
    .delete(apiConfig.endpoints.books.deleteBook.replace(':id', id))
    .then(() => {
      dispatch({ type: BOOKS_ACTIONS.BOOK_REMOVE, payload: id });
      dispatch({ type: MODAL_ACTIONS.MODAL_SUCCESS });
      setTimeout(() => {
        dispatch({ type: MODAL_ACTIONS.MODAL_CLOSE });
        history.goBack();
        dispatch({ type: BOOKS_ACTIONS.BOOK_CLEAR_STORE });
      }, 1500);
    })
    .catch(() => {
      dispatch({ type: MODAL_ACTIONS.MODAL_ERROR });
      setTimeout(() => {
        dispatch({ type: MODAL_ACTIONS.MODAL_CLOSE });
      }, 1500);
    });
};
