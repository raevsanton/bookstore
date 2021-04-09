import { Book } from "../../types/types";

//Books types
export interface InitialStateBooks {
    books: Book[]
    oneBook: any
    loadingBooks: boolean
    error: boolean
}

//Cart types
export interface InitialStateCart {
    booksInCart: Book[]
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