import { loadingReducer } from './loading';
import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { booksReducer } from "./books";
import { profileReducer } from "./profile";
import { darkModeReducer } from "./darkMode";

export const rootReducer = combineReducers({
    cart: cartReducer,
    books: booksReducer,
    profile: profileReducer,
    darkMode: darkModeReducer,
    loading: loadingReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;