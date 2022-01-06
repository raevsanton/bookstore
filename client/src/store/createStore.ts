import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from '../common/utils/localStorage';
import { rootReducer } from './rootReducer';

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const savedState = loadState();

export const store = createStore(rootReducer, savedState, enhancer);

store.subscribe(() => {
  saveState({
    profile: store.getState().profile,
    theme: store.getState().theme,
  });
});
