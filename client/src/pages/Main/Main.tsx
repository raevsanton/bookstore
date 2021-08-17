import React from 'react';
import './main.scss';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/rootReducer';
import ListBooks from '../../components/ListBooks';
import BookPage from '../BookPage';
import Profile from '../Profile';
import Error from '../../components/Error';
import { routes } from '../../common/constants/routes';

const Main = () => {
  const { darkMode } = useSelector((state: AppStateType) => state.darkMode);
  darkMode ? (document.body.className = 'dark') : (document.body.className = '');
  return (
    <main>
      <Switch>
        <Route path={routes.main} exact component={ListBooks} />
        <Route path={routes.book} component={BookPage} />
        <Route path={routes.profile} component={Profile} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
