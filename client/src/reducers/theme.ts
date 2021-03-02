import { SWITCH_THEME, ThemeActions } from "../actions/types";
import { InitialStateTheme } from "./types";

const initialState: InitialStateTheme = {
    darkMode: false
};

export const themeReducer =  (state = initialState, action: ThemeActions): InitialStateTheme => {
    switch(action.type) {
        case SWITCH_THEME:
            return {
                ...state,
                darkMode: action.payload
            };
        default:
            return state;
    }
}