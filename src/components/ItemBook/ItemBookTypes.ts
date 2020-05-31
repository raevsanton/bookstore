import {Book} from "../../types/types";

export interface OwnItemBookProps {
    book: Book
    isInCart: boolean
}

export interface MapDispatchItemBookProps {
    addBookToCart: (book : Book) => void
    removeBookFromCart: (id: string, amount: number) => void
}

export type ItemBookProps = OwnItemBookProps & MapDispatchItemBookProps