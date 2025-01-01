// import { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";
// import store from "./todoStore";
import { useSelector } from "react-redux";

export default function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const isDarkMode = store.getState().preferencesReducer.isDarkMode;
  // const [isDarkMode, setIsDarkMode] = useState(
  //   store.getState().preferencesReducer.isDarkMode
  // );

  // useEffect(() => {
  //   store.subscribe(() => {
  //     setIsDarkMode(store.getState().preferencesReducer.isDarkMode);
  //   });
  // }, []);

  //  with useSelector hook, we can not only read the state but also subscribe to that state
  // =>  meaning : any changes in that state will automatically trigger a re-render the component for us
  const isDarkMode = useSelector(
    (state) => state.preferencesReducer.isDarkMode
  );

  const themeClass = isDarkMode ? "dark" : "light";

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header
        // isDarkMode={isDarkMode}
        // setIsDarkMode={setIsDarkMode}
        />
        <main>
          <TodoWrapper
          // isDarkMode={isDarkMode}
          />
        </main>
      </div>
    </div>
  );
}
