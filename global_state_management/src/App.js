import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";
import todoStore from "./todoStore";

export default function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // instead of using local state, we are using global state
  const isDarkMode = todoStore.getState().isDarkMode;
  console.log("isDarkMode inside App : ", isDarkMode);

  const themeClass = isDarkMode ? "dark" : "light";

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header
          isDarkMode={isDarkMode}
          // setIsDarkMode={setIsDarkMode}
        />
        <main>
          <TodoWrapper isDarkMode={isDarkMode} />
        </main>
      </div>
    </div>
  );
}
