import { Dispatch } from 'redux';
import { ThemeActions } from './consts';

export const switchTheme = (darkMode: boolean) => (dispatch: Dispatch): void => {
  dispatch({
    type: ThemeActions.SWITCH_THEME,
    darkMode,
  });
};
