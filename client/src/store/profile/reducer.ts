import { AnyAction } from 'redux';
import { ProfileActions } from './consts';

interface IInitialStateProfile {
  firstName: string;
  lastName: string;
}

const initialState: IInitialStateProfile = {
  firstName: 'John',
  lastName: 'Smith',
};

export const profileReducer = (state = initialState, action: AnyAction): IInitialStateProfile => {
  switch (action.type) {
    case ProfileActions.CHANGE_NAME:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};
