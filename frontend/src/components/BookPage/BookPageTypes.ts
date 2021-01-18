import {Book} from "../../types/types";

export interface OwnBookPageProps {
    match: any
    data: Array<any>
}

export interface MapStateToPropsBookPage {
    booksInCart: Array<Book>
}

export interface MapDispatchBookPageProps {
    addBookToCart: (book : Book) => void
    removeBookFromCart: (id: string, amount: number) => void
}

export type BookPageProps = OwnBookPageProps & MapDispatchBookPageProps & MapStateToPropsBookPage