import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import todoStore from "./todoStore.js";

createRoot(document.getElementById("root")).render(
  <Provider store={todoStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

/*
  Provider Pattern

  Context/Provider in React
  // Provide/Inject in Vue

  Context : Additional information that's useful for complete functionality
  Provider : The person/entity which is giving out the context to you(a component)

  <Provider context={actualContext}>
    <App /> =>  Header, Footer, TodoList, .... => all these components can get accesss to the actualContext
  </Provider>

  // React-Redux
  //  Redux is completely core javascript concept
  //  React is a UI Library
  //  React-Rexux is "Official React bindings for Redux" : connects React with Redux
              =>  React-Redux is a UI binding for redux when it comes to React.

*/
