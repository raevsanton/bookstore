import { AnyAction } from 'redux';
import { ModalActions } from './consts';

export enum ModalStatus {
  DEFAULT = 'default',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface IInitialStateModal {
  modalOpen: boolean;
  modalStatus: ModalStatus;
}

const initialState: IInitialStateModal = {
  modalOpen: false,
  modalStatus: ModalStatus.DEFAULT,
};

export const modalReducer = (state = initialState, action: AnyAction): IInitialStateModal => {
  switch (action.type) {
    case ModalActions.MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
      };
    case ModalActions.MODAL_CLOSE:
      return initialState;
    case ModalActions.MODAL_SUCCESS:
      return {
        ...state,
        modalStatus: ModalStatus.SUCCESS,
      };
    case ModalActions.MODAL_ERROR:
      return {
        ...state,
        modalStatus: ModalStatus.ERROR,
      };
    default: {
      return state;
    }
  }
};
