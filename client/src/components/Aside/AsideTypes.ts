import { Book } from "../../types/types";

export interface MapStateToPropsAside {
    booksInCart: Book[]
    firstName: string
    lastName: string
    darkMode: boolean
}

export type AsideProps = MapStateToPropsAside