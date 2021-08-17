import { AnyAction } from 'redux';
import { ThemeActions } from './consts';

interface IInitialStateTheme {
  darkMode: boolean;
}

const initialState: IInitialStateTheme = {
  darkMode: false,
};

export const darkModeReducer = (state = initialState, action: AnyAction): IInitialStateTheme => {
  switch (action.type) {
    case ThemeActions.SWITCH_THEME:
      return {
        ...state,
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};
