import React from 'react';
import './main.scss';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes } from '../../common/constants/routes';
import { ListBooks } from '../../components/ListBooks/ListBooks';
import { BookPage } from '../BookPage/BookPage';
import { Profile } from '../Profile/Profile';
import { Error } from '../../components/Error/Error';
import { selectTheme } from '../../store/theme/selectors';

export const Main = (): React.ReactElement => {
  const { darkMode } = useSelector(selectTheme);
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
