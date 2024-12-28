import { useState } from "react";
import ChildCounter1 from "../ChildCounter1";
import ChildCounter2 from "../ChildCounter2";
import counterStore from "../../../counterStore";
import { IconSun, IconMoon } from "../../assets/svg";

import "./ParentCounter.css";
const ParentCounter = () => {
  // const [count, setCount] = useState(0);
  const count = counterStore.getState().count;
  // const setCount = counterStore.getState().setCount;

  // const [isDarkMode, setIsDarkMode] = useState(true);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const isDarkMode = counterStore.getState().isDarkMode;
  // eslint-disable-next-line no-unused-vars
  const [localIsDarkMode, setLocalIsDarkMode] = useState(
    counterStore.getState().isDarkMode
  );

  const handleThemeChange = () => {
    counterStore.dispatch({
      type: "TOGGLE_DARK_MODE",
      payload: !isDarkMode,
    });
    setLocalIsDarkMode(counterStore.getState().isDarkMode);
  };

  return (
    <div
      className={`parent-counter-wrapper ${
        isDarkMode ? "dark-mode-wrapper" : "light-mode-wrapper"
      }`}
    >
      <h1>ParentCounter</h1>
      <div className="parent-header">
        <h2 className="counter">Count : {count}</h2>
        <button
          className={`toggle-dark-mode-button ${
            isDarkMode ? "dark-mode-button" : "light-mode-button"
          }`}
          // onClick={() => {
          //   // setIsDarkMode(!isDarkMode);
          // }}
          onClick={handleThemeChange}
        >
          {/* <img src={isDarkMode ? SwitchToDarkIcon : SwitchToLightIcon} alt="" /> */}
          {isDarkMode ? <IconMoon /> : <IconSun />}
        </button>
      </div>
      <div className="parent-counter-container">
        {/* <ChildCounter1 count={count} setCount={setCount} /> */}
        {/* <ChildCounter2 count={count} setCount={setCount} /> */}
        {/* <ChildCounter1 /> */}
        {/* <ChildCounter1 isDarkMode={isDarkMode} /> */}
        <ChildCounter1 />
        {/* <ChildCounter2 count={count} /> */}
        {/* <ChildCounter2 isDarkMode={isDarkMode} /> */}
        <ChildCounter2 />
      </div>
    </div>
  );
};

export default ParentCounter;
