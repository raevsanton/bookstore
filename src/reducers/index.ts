import {combineReducers} from "redux";
import cart from "./cart";
import books from "./books";

export const rootReducer = combineReducers({
    cart,
    books
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;