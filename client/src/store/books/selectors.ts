import { AppStateType } from '../rootReducer';
import { IBooks } from './types';

export const selectBooks = (state: AppStateType): IBooks => state.books;
