import { AnyAction } from 'redux';
import { LoadingActions } from './consts';

interface IInitialStateModal {
  isLoading: boolean;
  isError: boolean;
}

const initialState: IInitialStateModal = {
  isLoading: false,
  isError: false,
};

export const loadingReducer = (state = initialState, action: AnyAction): IInitialStateModal => {
  switch (action.type) {
    case LoadingActions.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LoadingActions.LOADING_SUCCESS:
      return initialState;
    case LoadingActions.LOADING_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default: {
      return state;
    }
  }
};
