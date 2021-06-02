import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../reducers";
import { 
    Book, 
    BooksActions, 
    RemoveBookSuccessAction, 
    GetBooksErrorAction, 
    GetBooksRequestAction, 
    GetBooksSuccessAction, 
    GetOneBookSuccessAction,
    RemoveBookErrorAction, 
} from "../../types/types";
import { 
    GET_BOOKS_REQUEST, 
    GET_BOOKS_SUCCESS, 
    GET_BOOKS_ERROR, 
    GET_ONE_BOOK_SUCCESS,
    REMOVE_ONE_BOOK_SUCCESS,
    REMOVE_ONE_BOOK_ERROR,
} from "./consts";
import { 
    deleteOneBook, 
    fetchAllBooks, 
    fetchOneBook 
} from "../../api";

export const getBooksRequest = (): GetBooksRequestAction => ({
    type: GET_BOOKS_REQUEST
});
export const getBooksSuccess = (): GetBooksSuccessAction => ({
    type: GET_BOOKS_SUCCESS,
});
export const getBooksError = (): GetBooksErrorAction => ({
    type: GET_BOOKS_ERROR
});
const getOneBooksSuccess = (book: Book): GetOneBookSuccessAction => ({
    type: GET_ONE_BOOK_SUCCESS,
    payload: book
});
const removeBookSuccess = (id: string): RemoveBookSuccessAction => ({
    type: REMOVE_ONE_BOOK_SUCCESS,
    payload: id
});
const removeBookError = (): RemoveBookErrorAction => ({
    type: REMOVE_ONE_BOOK_ERROR
});


export const getAllBooks = (): ThunkAction<Promise<void>, AppStateType, unknown, BooksActions> => {
    return async (dispatch) => {
        dispatch(getBooksRequest());
        try {
            const { data } = await fetchAllBooks();
            // dispatch(getBooksSuccess(data))
        } catch(error) {
            dispatch(getBooksError())
        }
    }
};

export const getOneBook = (id: string): ThunkAction<Promise<void>, AppStateType, unknown, BooksActions> => {
    return async (dispatch) => {
        dispatch(getBooksRequest());
        try {
            const { data } = await fetchOneBook(id);
            dispatch(getOneBooksSuccess(data))
        } catch(error) {
            dispatch(getBooksError())
        }
    }
};

export const removeOneBook = (id: string): ThunkAction<Promise<void>, AppStateType, unknown, BooksActions> => {
    return async (dispatch) => {
        try {
            await deleteOneBook(id)
            dispatch(removeBookSuccess(id))
            console.log('SUCCESS')
        } catch(error) {
            dispatch(removeBookError())
            console.log('ERROR')
        }
    }
};