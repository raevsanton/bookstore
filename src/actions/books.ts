import {
    GET_BOOKS_ERROR,
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    SORT_BOOKS,
    GetBooksErrorAction,
    GetBooksRequestAction,
    GetBooksSuccessAction,
    SortBooksAction,
    BooksActions
} from "./types";
import axios from 'axios';
import {Book} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";

export const getBooksRequest = (): GetBooksRequestAction => ({
    type: GET_BOOKS_REQUEST
});
export const getBooksSuccess = (books: Array<Book>): GetBooksSuccessAction => ({
    type: GET_BOOKS_SUCCESS,
    payload: books
});
export const getBooksError = (): GetBooksErrorAction => ({
    type: GET_BOOKS_ERROR
});
export const getBooks = (): ThunkAction<Promise<void>, AppStateType, unknown, BooksActions> => {
    return async (dispatch) => {
        dispatch(getBooksRequest());
        try {
            const response = await axios.get('https://www.googleapis.com/books/v1/users/101983073010739360025/bookshelves/0/volumes?key=AIzaSyBsLrsbq-KGRM4L4qtmZmbL9ktttAEexh4');
            dispatch(getBooksSuccess(response.data.items))
        } catch(error) {
            dispatch(getBooksError())
        }
    }
};
export const sortBooks = (event: any, books: Array<Book>, booksSorted: boolean):  SortBooksAction => ({
    type: SORT_BOOKS,
    payload: {
        event,
        books,
        booksSorted
    }
})