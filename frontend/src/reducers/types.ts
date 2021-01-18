import {Book} from "../types/types";

//Books types
export interface InitialStateBooks {
    books: Array<Book>
    loadingBooks: boolean
    error: boolean
    booksSorted: boolean
    selectedSort: string
}

//Cart types
export interface InitialStateCart {
    booksInCart: Array<Book>
    totalPrice: number
}

//Profile types
export interface InitialStateProfile {
    firstName: string
    lastName: string
}

export interface InitialStateTheme {
    darkMode: boolean
}