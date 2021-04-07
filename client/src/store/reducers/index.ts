import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { booksReducer } from "./books";
import { profileReducer } from "./profile";
import { themeReducer } from "./theme";

export const rootReducer = combineReducers({
    cart: cartReducer,
    books: booksReducer,
    profile: profileReducer,
    theme: themeReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;