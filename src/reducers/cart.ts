import {
    ADD_BOOK_TO_CART,
    REMOVE_BOOK_FROM_CART,
    CartActions
} from "../actions/types";
import {Book} from "../types/types";
import {InitialStateCart} from "./types";

const initialState: InitialStateCart = {
    booksInCart: [],
    totalPrice: 0
};

export default (state = initialState, action: CartActions): InitialStateCart => {
    switch(action.type) {
        case ADD_BOOK_TO_CART:
            return {
                ...state,
                booksInCart: [...state.booksInCart, action.payload],
                totalPrice: state.totalPrice + action.payload.saleInfo.listPrice.amount
            };
        case REMOVE_BOOK_FROM_CART:
            return {
                ...state,
                booksInCart: state.booksInCart.filter((o: Book) => o.id !== action.payload.bookId),
                totalPrice: state.totalPrice - action.payload.price
            };
        default:
            return state;
    }
}