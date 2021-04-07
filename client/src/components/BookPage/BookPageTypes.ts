import { Book } from "../../types/types";

export interface MapStateToPropsBookPage {
    booksInCart: Book[]
    oneBook: Book
    loadingBooks: boolean
}

export interface MapDispatchBookPageProps {
    addBookToCart: (book : Book) => void
    removeBookFromCart: (id: string, amount: number) => void
    getOneBookById: (id: string | undefined) => Object
}

export interface MatchParamsBookPage {
    id: string | undefined
}

export type BookPageProps = MapDispatchBookPageProps & MapStateToPropsBookPage