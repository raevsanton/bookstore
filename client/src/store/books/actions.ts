import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { BookActions } from './consts';
import { LoadingActions } from '../loading/consts';
import { ModalActions } from '../modal/consts';
import { apiFetcher } from '../../common/utils/fetcher';
import { apiConfig } from '../../common/constants/apiConfig';
import { IBook } from './types';

export const getAllBooks = () => (dispatch: Dispatch): void => {
  dispatch({ type: LoadingActions.LOADING });
  apiFetcher
    .get(apiConfig.endpoints.books.getAllBooks.path)
    .then((res: IBook[]) => {
      dispatch({
        type: BookActions.BOOKS_SUCCESS,
        books: res,
      });
      dispatch({ type: LoadingActions.LOADING_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: LoadingActions.LOADING_ERROR });
    });
};

export const getOneBook = (id: string) => (dispatch: Dispatch): void => {
  dispatch({ type: LoadingActions.LOADING });
  apiFetcher
    .get(apiConfig.endpoints.books.getOneBook.path.replace(':id', id))
    .then((res: IBook) => {
      dispatch({
        type: BookActions.BOOK_SUCCESS,
        book: res,
      });
      dispatch({ type: LoadingActions.LOADING_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: LoadingActions.LOADING_ERROR });
    });
};

export const removeOneBook = (id: string, history: RouteComponentProps['history']) => (dispatch: Dispatch): void => {
  apiFetcher
    .delete(apiConfig.endpoints.books.deleteOneBook.path.replace(':id', id))
    .then(() => {
      dispatch({
        type: BookActions.BOOK_REMOVE,
        bookId: id,
      });
      dispatch({ type: ModalActions.MODAL_SUCCESS });
      setTimeout(() => {
        dispatch({ type: ModalActions.MODAL_CLOSE });
        history.goBack();
        dispatch({ type: BookActions.BOOK_CLEAR_STORE });
      }, 1500);
    })
    .catch(() => {
      dispatch({ type: ModalActions.MODAL_ERROR });
      setTimeout(() => {
        dispatch({ type: ModalActions.MODAL_CLOSE });
      }, 1500);
    });
};
