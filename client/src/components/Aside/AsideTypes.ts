import { Book } from "../../types/types";

export interface MapStateToPropsAside {
    booksInCart: Book[]
    firstName: string
    lastName: string
}

export type AsideProps = MapStateToPropsAside