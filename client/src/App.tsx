import React from 'react';
import { Main } from './pages/Main/Main';
import { Aside } from './components/Aside/Aside';

export const App = (): React.ReactElement => (
  <div className="main__content">
    <Aside />
    <Main />
  </div>
);
