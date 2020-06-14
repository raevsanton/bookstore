import { SWITCH_THEME, SwitchThemeAction } from "./types";

export const switchTheme = (darkMode: boolean): SwitchThemeAction => ({
    type: SWITCH_THEME,
    payload: darkMode
})