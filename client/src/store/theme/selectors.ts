import { AppStateType } from '../rootReducer';
import { ITheme } from './types';

export const selectTheme = (state: AppStateType): ITheme => state.theme;
