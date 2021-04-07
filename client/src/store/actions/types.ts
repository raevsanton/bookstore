import {Book} from "../../types/types";

//Constants
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';
export const GET_ONE_BOOK_SUCCESS = 'GET_ONE_BOOK_SUCCESS';
export const CHANGE_NAME = 'CHANGE_NAME';
export const SWITCH_THEME = 'SWITCH_THEME'
export const SORT_BOOKS = 'SORT_BOOKS';

//Books types
export interface GetBooksRequestAction {
    type: typeof GET_BOOKS_REQUEST
}
export interface GetBooksSuccessAction {
    type: typeof GET_BOOKS_SUCCESS
    payload: Book[]
}
export interface GetBooksErrorAction {
    type: typeof GET_BOOKS_ERROR
}
export interface GetOneBookSuccessAction {
    type: typeof GET_ONE_BOOK_SUCCESS
    payload: Book
}
export interface SortBooksAction {
    type: typeof SORT_BOOKS,
    payload: {
        event: string
        books: Book[]
        booksSorted: boolean
    }
}
export type BooksActions = GetBooksRequestAction
    | GetBooksSuccessAction
    | GetBooksErrorAction
    | GetOneBookSuccessAction
    | SortBooksAction

//Cart types
export interface AddBookToCartAction {
    type: typeof ADD_BOOK_TO_CART
    payload: Book
}
export interface RemoveBookFromCartAction {
    type: typeof REMOVE_BOOK_FROM_CART
    payload: {
        bookId: string
        price: number
    }
}
export type CartActions = AddBookToCartAction
    | RemoveBookFromCartAction

//Profile types 
export interface ChangeNameAction {
    type: typeof CHANGE_NAME
    payload: {
        firstName: string
        lastName: string
    }
}

export type ProfileActions = ChangeNameAction

//Theme types
export interface SwitchThemeAction {
    type: typeof SWITCH_THEME
    payload: boolean
}

export type ThemeActions = SwitchThemeAction