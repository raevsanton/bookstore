import { AnyAction } from 'redux';
import { THEME_ACTIONS } from './consts';
import { ITheme } from './types';

const initialState: ITheme = {
  darkMode: false,
};

export const themeReducer = (state = initialState, action: AnyAction): ITheme => {
  switch (action.type) {
    case THEME_ACTIONS.SWITCH_THEME:
      return {
        ...state,
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};
