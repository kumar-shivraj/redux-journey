import createStore from "./library/createStore";

const initialState = {
  count: 0,
  isDarkMode: false,
};

// const handleIncrement = (state) => {
//   console.log("Before increment, count : ", state.count);
//   state.count = state.count + 1;
//   console.log("After increment, count : ", state.count);
// };

const reducer = (state, action) => {
  console.log("Start of reducer");
  console.log("action : ", action);
  console.log("state before reducer update : ", state);
  switch (action.type) {
    case "INCREMENT":
      // state.count += 1;
      state.count += action.payload;
      break;
    case "DECREMENT":
      // state.count -= 1;
      state.count -= action.payload;
      break;
    case "TOGGLE_DARK_MODE":
      // state.isDarkMode = action.payload;
      state.isDarkMode = !state.isDarkMode;
      break;
    default:
      break;
  }
  console.log("state after reducer update : ", state);
  console.log("End of reducer");
};
// const counterStore = createStore(initialState);
// const counterStore = createStore(initialState, handleIncrement);
const counterStore = createStore(initialState, reducer);

export default counterStore;
