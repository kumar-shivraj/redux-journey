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

/*
  Hooks ? 
  Custom Hooks ?? --> Hooks that we create ourselves
                  --> It is created by React-Redux library as well

  useDispatch(), useSelector()  =>  provided by react-redux.


  Why is it provided by React-Redux ? not by redux only ? 
    =>  Redux is the general implementation of the global state management
    =>  And We are building React Application. And binding we are using for these two is React-Redux
    =>  Inside these hooks, they internally using the redux stuffs.
    =>  Hook is concept of React, not Redux.

    // Therefore, these hooks are provided by React-Redux

*/
