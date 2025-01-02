import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./todoStore";

import App from "./App";
// import { produce } from "immer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

/*
  State Immutability => We are not going to mutate the original state

  const originalState = { foo: 1, bar: 2 };
  originalState.foo = 3;  // This will mutate the original state(avoid using this pattern)

  in our code, we are trying to do like below :
    return {
    ...state,
    isDarkMode: !state.isDarkMode
    }

*/

/*
  const baseState = [
    {
    todo: "Learn React",
    completed: true
    },
    {
    todo: "Learn Immer.js",
    completed: false
    }
  ]

  // Our goal is to :
    1.  Mark this second item as completed(true)
    2.  Add another fresh todo to the baseState

  We don't want to mutate the original state.
  Here we want to see how Immer.js is going to help us.

  // Immer.js 
  const newState = produce(baseState, (draft) => {
    // draft : as a proxy / as a representation of the baseState
    // I'm giving you this draft version of the baseState
    // Go CRAZY! do whatever you want with the draft version of the state



    // We can now write state updates in a mutable fashion for this draft. Yay!

    // Mark this second item as completed
    draft[1].completed = true;

    // Add another todo
    draft.push({
      todo: "Learn Redux",
      completed: true
    })


  })

  console.log(newState)


  // How can we check whether baseState is referentially different from the new state ??
  console.log(newState === baseState) // false

  // Redux Toolkit uses Immer.js internally and we don't need to do anything additionally
  // Just for the understanding purpose, we gone through above concept.

*/

/*
const baseState = [
  {
    todo: "Learn React",
    completed: true,
  },
  {
    todo: "Learn Immer.js",
    completed: false,
  },
];

const newState = produce(baseState, (draft) => {
  draft[1].completed = true;
  draft.push({
    todo: "Learn Redux",
    completed: true,
  });
});

console.log(newState);
console.log(newState === baseState);
*/
