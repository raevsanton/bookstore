import { Dispatch } from 'redux';
import { THEME_ACTIONS } from './consts';

export const switchTheme = (darkMode: boolean) => (dispatch: Dispatch): void => {
  dispatch({ type: THEME_ACTIONS.SWITCH_THEME, darkMode });
};
