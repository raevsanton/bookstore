import { Book } from "../../types/types";

export interface MapStateToPropsBookPage {
    books: Book[]
    book: Book | null
    darkMode: boolean
    isLoading: boolean
    isError: boolean
}

export interface MapDispatchBookPageProps {
    getOneBook: (id: string) => void
    removeOneBook: (id: string) => void
}

export interface MatchParamsBookPage {
    id: string
}

export type BookPageProps = MapDispatchBookPageProps & MapStateToPropsBookPage