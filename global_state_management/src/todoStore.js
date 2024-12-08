//  create the store for todo app by code provided by library team
import createStore from "./library/createStore";

const INITIAL_STATE = {
  // isDarkMode: true,
  isDarkMode: false,
};

function handler(state) {
  console.log("Old state : ", state);
  state.isDarkMode = !state.isDarkMode;
  console.log("New state : ", state);
}

const todoStore = createStore(INITIAL_STATE, handler);

export default todoStore;
