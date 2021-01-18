import {Book} from "../../types/types";

export interface MapStateMainProps {
    books: Array<Book>
    booksInCart: Array<Book>
    loadingBooks: boolean
    error: boolean
    firstName: string
    lastName: string
    booksSorted: boolean
    selectedSort: string
}
export interface MapDispatchMainProps {
    getAllBooks: () => void,
    sortBooks: (event: any, books: Array<Book>, booksSorted: boolean) => void
}
export type MainProps = MapStateMainProps & MapDispatchMainProps