import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./store/reducers";
import { BrowserRouter } from "react-router-dom";
import { loadState, saveState } from "./utils/localStorage";
import thunk from "redux-thunk";
import App from "./App";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const savedState = loadState();

const store = createStore(
  rootReducer, 
  savedState, 
  enhancer
);

store.subscribe(() => {
  saveState({
    profile: store.getState().profile,
    cart: store.getState().cart,
    darkMode: store.getState().darkMode
  });
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);