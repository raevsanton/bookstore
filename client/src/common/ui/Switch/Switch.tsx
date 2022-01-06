import React from 'react';
import './switch.scss';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../../../store/theme/actions';
import { selectTheme } from '../../../store/theme/selectors';

export const Switch = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectTheme);
  return (
    <div className="switch" onClick={() => dispatch(switchTheme(!darkMode))}>
      <button type="button" className={`switch__line ${darkMode && 'on-line'}`} />
      <div className={`switch__circle ${darkMode && 'on-circle'}`} />
    </div>
  );
};
