import { Book } from "../../types/types";

export interface OwnBookPageProps {
    match: any
}

export interface MapStateToPropsBookPage {
    booksInCart: Array<Book>
    oneBook: Book
    loadingBooks: boolean
}

export interface MapDispatchBookPageProps {
    addBookToCart: (book : Book) => void
    removeBookFromCart: (id: string, amount: number) => void
    getOneBookById: (id: number) => Object
}

export type BookPageProps = OwnBookPageProps & MapDispatchBookPageProps & MapStateToPropsBookPage