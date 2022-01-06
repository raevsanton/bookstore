import { MODAL_ACTIONS } from './consts';
import { IModal, ModalStatus } from './types';

const initialState: IModal = {
  modalOpen: false,
  modalStatus: ModalStatus.DEFAULT,
};

export const modalReducer = (state: IModal = initialState, action: FSA<string>): IModal => {
  switch (action.type) {
    case MODAL_ACTIONS.MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
      };
    case MODAL_ACTIONS.MODAL_CLOSE:
      return initialState;
    case MODAL_ACTIONS.MODAL_SUCCESS:
      return {
        ...state,
        modalStatus: ModalStatus.SUCCESS,
      };
    case MODAL_ACTIONS.MODAL_ERROR:
      return {
        ...state,
        modalStatus: ModalStatus.ERROR,
      };
    default: {
      return state;
    }
  }
};
