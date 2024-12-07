import React, { useEffect } from "react";
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";
import store from "../todoStore";

// const Header = ({ isDarkMode, setIsDarkMode }) => {
const Header = () => {
  // here isDarkMode is not required by porp as we can directly read it from global store
  const isDarkMode = store.getState().isDarkMode;

  const getThemeIcon = (isDarkMode) => {
    return isDarkMode ? SwitchToLightIcon : SwitchToDarkIcon;
  };
  let themeIcon = getThemeIcon(isDarkMode);

  const changeTheme = () => {
    // setIsDarkMode(!isDarkMode);
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
