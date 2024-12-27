import createStore from "./library/createStore";

const initialState = {
  count: 10,
};

const handleIncrement = (state) => {
  console.log("Before increment, count : ", state.count);
  state.count = state.count + 1;
  console.log("After increment, count : ", state.count);
};
// const counterStore = createStore(initialState);
const counterStore = createStore(initialState, handleIncrement);

export default counterStore;
