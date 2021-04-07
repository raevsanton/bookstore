import { Book } from "../../types/types";

export interface MapStateMainProps {
    books: Book[]
    loadingBooks: boolean
    error: boolean
    booksSorted: boolean
    selectedSort: string
}
export interface MapDispatchMainProps {
    getAllBooks: () => void,
    sortBooks: (event: string, books: Book[], booksSorted: boolean) => void
}
export type MainProps = MapStateMainProps & MapDispatchMainProps