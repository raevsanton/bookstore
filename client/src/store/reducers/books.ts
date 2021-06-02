import { Book, BooksActions } from "../../types/types";
import { 
    GET_BOOKS_REQUEST, 
    GET_BOOKS_SUCCESS, 
    GET_BOOKS_ERROR, 
    GET_ONE_BOOK_SUCCESS,
    REMOVE_ONE_BOOK_SUCCESS,
    REMOVE_ONE_BOOK_ERROR
} from "../actions/consts";
import { InitialStateBooks } from "./types";

const initialState: InitialStateBooks = {
    books: [],
    book: null,
    isLoading: false,
    isError: false,
};

export const booksReducer = (state = initialState, action: BooksActions): InitialStateBooks => {
    switch (action.type) {
        case GET_BOOKS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false
            };
        case GET_ONE_BOOK_SUCCESS:
            return {
                ...state,
                book: action.payload,
                isLoading: false,
                isError: false
            }
        case GET_BOOKS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case REMOVE_ONE_BOOK_SUCCESS:
            return { 
                ...state, 
                books: state.books.filter((book: Book) => book.id !== action.payload)
            };
        case REMOVE_ONE_BOOK_ERROR:
            return { 
                ...state, 
                books: state.books
            };
        default: {
            return state;
        } 
    }
};