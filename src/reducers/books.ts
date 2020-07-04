import {
    BooksActions,
    GET_BOOKS_ERROR,
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    SORT_BOOKS
} from "../actions/types";
import {InitialStateBooks} from "./types";

const initialState: InitialStateBooks = {
    books: [],
    loadingBooks: true,
    error: false,
    booksSorted: false,
    selectedSort: ''
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
        case SORT_BOOKS:
            switch(action.payload.event) {
                case '0':
                return {
                    ...state,
                    books: action.payload.books.sort((book1, book2) => 
                        book2.saleInfo.listPrice.amount - book1.saleInfo.listPrice.amount),
                    booksSorted: !action.payload.booksSorted,
                    selectedSort: action.payload.event
                };
                case '1':
                return {
                    ...state,
                    books: action.payload.books.sort((book1, book2) => 
                        book1.saleInfo.listPrice.amount - book2.saleInfo.listPrice.amount),
                    booksSorted: !action.payload.booksSorted,
                    selectedSort: action.payload.event
                }
            }
        default:
            return state;
        }
};