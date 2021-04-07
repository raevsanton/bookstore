import {
    GET_BOOKS_ERROR,
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    SORT_BOOKS,
    GET_ONE_BOOK_SUCCESS,
    GetBooksErrorAction,
    GetBooksRequestAction,
    GetBooksSuccessAction,
    SortBooksAction,
    BooksActions,
    GetOneBookSuccessAction,
} from "./types";
import axios from 'axios';
import { Book } from "../../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../reducers";

export const getBooksRequest = (): GetBooksRequestAction => ({
    type: GET_BOOKS_REQUEST
});
export const getBooksSuccess = (books: Book[]): GetBooksSuccessAction => ({
    type: GET_BOOKS_SUCCESS,
    payload: books
});
export const getBooksError = (): GetBooksErrorAction => ({
    type: GET_BOOKS_ERROR
});
export const getOneBookSuccess = (book: Book): GetOneBookSuccessAction => ({
    type: GET_ONE_BOOK_SUCCESS,
    payload: book
});

export const getAllBooks = (): ThunkAction<Promise<void>, AppStateType, unknown, BooksActions> => {
    return async (dispatch) => {
        dispatch(getBooksRequest());
        try {
            const response = await axios.get('/api/v1/books');
            dispatch(getBooksSuccess(response.data))
        } catch(error) {
            dispatch(getBooksError())
        }
    }
};

export const getOneBookById = (id: string | undefined): ThunkAction<Promise<void>, AppStateType, unknown, BooksActions> => {
    return async (dispatch) => {
        // dispatch(getBooksRequest());
        try {
            const response = await axios.get(`/api/v1/book/${id}`);
            dispatch(getOneBookSuccess(response.data))
        } catch(error) {
            dispatch(getBooksError())
        }
    }
};

export const sortBooks = (event: string, books: Book[], booksSorted: boolean):  SortBooksAction => ({
    type: SORT_BOOKS,
    payload: {
        event,
        books,
        booksSorted
    }
})