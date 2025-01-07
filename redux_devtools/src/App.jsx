import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";
import { useSelector } from "react-redux";

export default function App() {
  const isDarkMode = useSelector(state => state.preferencesReducer.isDarkMode)

  const themeClass = isDarkMode ? "dark" : "light";

  return (
      <div className={`wrapper ${themeClass}`}>
        <div className="container">
          <Header/>
          <main>
            <TodoWrapper/>
          </main>
        </div>
      </div>
  );
}
