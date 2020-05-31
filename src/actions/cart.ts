import {
    ADD_BOOK_TO_CART,
    REMOVE_BOOK_FROM_CART,
    AddBookToCartAction,
    RemoveBookFromCartAction
} from "./types";
import {Book} from "../types/types";

export const addBookToCart = (book: Book): AddBookToCartAction => ({
    type: ADD_BOOK_TO_CART,
    payload: book
});
export const removeBookFromCart = (bookId: string, price: number): RemoveBookFromCartAction => ({
    type: REMOVE_BOOK_FROM_CART,
    payload: {
        bookId,
        price
    }
});