import {Book} from "../../types/types";

export interface MapStateHeaderProps {
    totalPrice: number
    booksInCart: Array<Book>
}

export type HeaderProps = MapStateHeaderProps