import { combineReducers } from 'redux';
import { booksReducer } from './books/reducer';
import { profileReducer } from './profile/reducer';
import { themeReducer } from './theme/reducer';
import { modalReducer } from './modal/reducer';

export const rootReducer = combineReducers({
  books: booksReducer,
  profile: profileReducer,
  theme: themeReducer,
  modal: modalReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
