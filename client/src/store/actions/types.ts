import { Book } from "../../types/types";

//Constants
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const LOADING_REQUEST = 'LOADING_REQUEST';
export const LOADING_ERROR = 'LOADING_ERROR';
export const CHANGE_NAME = 'CHANGE_NAME';
export const SWITCH_THEME = 'SWITCH_THEME'
export const SORT_BOOKS = 'SORT_BOOKS';

//Loading types
export interface LoadingRequestAction {
    type: typeof LOADING_REQUEST
}
export interface LoadingSuccessAction {
    type: typeof LOADING_SUCCESS
}
export interface LoadingErrorAction {
    type: typeof LOADING_ERROR
}
export interface SortBooksAction {
    type: typeof SORT_BOOKS,
    payload: {
        event: string
    }
}
export type LoadingActions = LoadingRequestAction
    | LoadingSuccessAction
    | LoadingErrorAction
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