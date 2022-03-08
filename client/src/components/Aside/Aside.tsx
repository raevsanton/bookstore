import React from 'react';
import './aside.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import face from '../../assets/images/face.jpg';
import { AppStateType } from '../../store/rootReducer';
import { routes } from '../../common/constants/routes';
import { Switch } from '../../common/ui/Switch/Switch';
import { selectTheme } from '../../store/theme/selectors';

export const Aside = (): React.ReactElement => {
  const { firstName, lastName } = useSelector((state: AppStateType) => state.profile);
  const { darkMode } = useSelector(selectTheme);
  return (
    <aside>
      <Link to={routes.profile}>
        <div className={`main__profile ${darkMode && 'dark-background'}`}>
          <div className="main__avatar">
            <img className="main__face" src={face} alt="profile-face" />
          </div>
          <h3 className="main__name">{`${firstName} ${lastName}`}</h3>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={routes.main} className="main__button">
              <p>My Library</p>
            </Link>
          </li>
        </ul>
      </nav>
      <Switch />
    </aside>
  );
};
