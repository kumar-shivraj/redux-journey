import React, { useEffect, useState } from "react";
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";
import store from "../todoStore";

// getting subscribed to the event : when state is updated, component should effect with the latest state
/*
  HACKY!

  Approach 1 : Maintaining the local State :
  As we know that when local state is getting updated, the component is going to re-render.

*/
// const Header = ({ isDarkMode, setIsDarkMode }) => {
const Header = () => {
  // here isDarkMode is not required by porp as we can directly read it from global store
  const isDarkMode = store.getState().isDarkMode;
  console.log("isDarkMode inside Header : ", isDarkMode);

  //  maintaining the local state in order to keep the component in sync with the global state
  const [localIsDarkMode, setLocalIsDarkMode] = useState(isDarkMode);

  const getThemeIcon = (isDarkMode) => {
    return isDarkMode ? SwitchToLightIcon : SwitchToDarkIcon;
  };
  let themeIcon = getThemeIcon(isDarkMode);

  const changeTheme = () => {
    // setIsDarkMode(!isDarkMode);

    // Dispatch the function
    store.dispatch();

    // after dispatch, the store will be updated. So we can take the latest state from the store and update the local state
    // store will return the new value of the state
    setLocalIsDarkMode(store.getState().isDarkMode);
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
