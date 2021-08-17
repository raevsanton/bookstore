import { combineReducers } from 'redux';
import { loadingReducer } from './loading/reducer';
import { booksReducer } from './books/reducer';
import { profileReducer } from './profile/reducer';
import { darkModeReducer } from './theme/reducer';
import { modalReducer } from './modal/reducer';

export const rootReducer = combineReducers({
  books: booksReducer,
  profile: profileReducer,
  darkMode: darkModeReducer,
  loading: loadingReducer,
  modal: modalReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
