import { AppStateType } from '../rootReducer';
import { IModal } from './types';

export const selectModal = (state: AppStateType): IModal => state.modal;
