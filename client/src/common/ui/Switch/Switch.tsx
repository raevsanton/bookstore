import React from 'react';
import './switch.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../../store/rootReducer';
import { switchTheme } from '../../../store/theme/actions';

const Switch = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: AppStateType) => state.darkMode);
  return (
    <div className="switch" onClick={() => dispatch(switchTheme(!darkMode))}>
      <button type="button" className={`switch__line ${darkMode && 'on-line'}`} />
      <div className={`switch__circle ${darkMode && 'on-circle'}`} />
    </div>
  );
};

export default Switch;
