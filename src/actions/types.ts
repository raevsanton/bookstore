import {Book} from "../types/types";

export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";

//Books types
export interface GetBooksRequestAction {
    type: typeof GET_BOOKS_REQUEST
}
export interface GetBooksSuccessAction {
    type: typeof GET_BOOKS_SUCCESS,
    payload: Array<Book>
}
export interface GetBooksErrorAction {
    type: typeof GET_BOOKS_ERROR
}
export type BooksActions = GetBooksRequestAction
    | GetBooksSuccessAction
    | GetBooksErrorAction

//Cart types
export interface AddBookToCartAction {
    type: typeof ADD_BOOK_TO_CART,
    payload: Book
}
export interface RemoveBookFromCartAction {
    type: typeof REMOVE_BOOK_FROM_CART
    payload: {
        bookId: string,
        price: number
    }
}
export type CartActionsType = AddBookToCartAction
    | RemoveBookFromCartAction