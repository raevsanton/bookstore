import { Book } from "../../types/types";

export interface MapStateMainProps {
    books: Book[]
    loadingBooks: boolean
    error: boolean
    darkMode: boolean
}

export interface MapDispatchMainProps {
    getAllBooks: () => void,
    sortBooks: (event: string) => void
}

export type MainProps = MapStateMainProps & MapDispatchMainProps