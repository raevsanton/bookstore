import { Dispatch } from 'redux';
import { MODAL_ACTIONS } from './consts';

export const closeModal = () => (dispatch: Dispatch): void => {
  dispatch({ type: MODAL_ACTIONS.MODAL_CLOSE });
};

export const openModal = () => (dispatch: Dispatch): void => {
  dispatch({ type: MODAL_ACTIONS.MODAL_OPEN });
};
