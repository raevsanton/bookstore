import {Book} from "../../types/types";

export interface MapStateMainProps {
    books: Array<Book>
    booksInCart: Array<Book>
    loadingBooks: boolean
    error: boolean
}
export interface MapDispatchMainProps {
    getBooks: () => void
}
export type MainProps = MapStateMainProps & MapDispatchMainProps