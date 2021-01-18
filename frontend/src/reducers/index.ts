import {combineReducers} from "redux";
import cart from "./cart";
import books from "./books";
import profile from "./profile";
import theme from "./theme";

export const rootReducer = combineReducers({
    cart,
    books,
    profile,
    theme
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;