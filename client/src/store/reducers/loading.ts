import { BooksActions } from "../../types/types";
import { 
    GET_BOOKS_REQUEST, 
    GET_BOOKS_ERROR, 
    GET_ONE_BOOK_SUCCESS,
} from "../actions/consts";
import { InitialStateBooks } from "./types";

const initialState: any = {
    isLoading: true,
    isError: false,
};

export const loadingReducer = (state = initialState, action: BooksActions): InitialStateBooks => {
    switch (action.type) {
        case GET_BOOKS_REQUEST:
            return {
                ...state,
                isLoading: true
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
        default: {
            return state;
        } 
    }
};