import { SWITCH_THEME, ThemeActions } from "../actions/types";
import { InitialStateTheme } from "./types";

const initialState: InitialStateTheme = {
    darkMode: false
};

export default (state = initialState, action: ThemeActions): InitialStateTheme => {
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