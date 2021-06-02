import { Book } from "../../types/types";
export interface MapStateMainProps {
    books: Book[]
    isLoading: boolean
    isError: boolean
    darkMode: boolean
}

export interface MapDispatchMainProps {
    getAllBooks: () => void,
}

export type MainProps = MapStateMainProps & MapDispatchMainProps