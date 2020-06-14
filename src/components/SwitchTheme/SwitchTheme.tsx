import React from "react";
import "./SwitchTheme.scss";
import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../reducers";
import { switchTheme } from "../../actions/theme";

const SwitchTheme = () => {
  const dispatch = useDispatch();
  let darkMode = useSelector((state: AppStateType) => state.theme.darkMode);
  return (
    <div className="switch" onClick={() => dispatch(switchTheme(!darkMode))}>
        <button className={`switch__line ${darkMode && "on-line"}`} />
        <div className={`switch__circle ${darkMode && "on-circle"}`} />
    </div>
  );
};

export default SwitchTheme;
