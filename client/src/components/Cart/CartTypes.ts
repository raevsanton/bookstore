import { Book } from "../../types/types";

export interface MapStateCartProps {
    totalPrice: number
    booksInCart: Book[]
    darkMode: boolean
}

export interface MapDispatchCartProps {
    removeBookFromCart: (id: string, amount: number) => void
}

export type CartProps = MapStateCartProps & MapDispatchCartProps