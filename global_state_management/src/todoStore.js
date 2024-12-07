//  create the store for todo app by code provided by library team
import createStore from "./library/createStore";

const INITIAL_STATE = {
  // isDarkMode: true,
  isDarkMode: false,
};

const todoStore = createStore(INITIAL_STATE);

export default todoStore;
