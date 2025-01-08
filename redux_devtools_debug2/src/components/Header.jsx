import React, { useEffect } from "react";
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";
import store from "../todoStore";
// import { toggleDarkMode } from "../actions";
import { toggleDarkMode } from "../slices/preferencesSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Header = () => {
  const isDarkMode = useSelector(state => state.preferencesReducer.isDarkMode);

  const dispatch = useDispatch();
  
  const getThemeIcon = (isDarkMode) => {
    return isDarkMode ? SwitchToLightIcon : SwitchToDarkIcon;
  }
  let themeIcon = getThemeIcon(isDarkMode);

  const changeTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header>
      <h1>TODO</h1>
      <button className="btn" onClick={changeTheme}>
        <img id="themeIcon" src={themeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default Header;
