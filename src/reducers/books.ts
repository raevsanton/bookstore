import {
    BooksActions,
    GET_BOOKS_ERROR,
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS
} from "../actions/types";
import {InitialStateBooks} from "./types";

const initialState: InitialStateBooks = {
    books: [],
    loadingBooks: true,
    error: false,
};

export default (state = initialState, action: BooksActions): InitialStateBooks => {
    switch (action.type) {
        case GET_BOOKS_REQUEST:
            return {
                ...state,
                loadingBooks: true
            };
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loadingBooks: false,
                error: false
            };
        case GET_BOOKS_ERROR:
            return {
                ...state,
                loadingBooks: false,
                error: true
            };
        default:
            return state;
    }
};