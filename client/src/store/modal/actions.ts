import { Dispatch } from 'redux';
import { ModalActions } from './consts';

export const closeModal = () => (dispatch: Dispatch): void => {
  dispatch({ type: ModalActions.MODAL_CLOSE });
};

export const openModal = () => (dispatch: Dispatch): void => {
  dispatch({ type: ModalActions.MODAL_OPEN });
};
