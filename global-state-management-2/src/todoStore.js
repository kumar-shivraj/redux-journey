import createStore from "./library/createStore";

const initialState = {
  isDarkMode: false,
  filterStatus: "active",
  // filterStatus: "all",
};

// const toggleDarkMode = (state) => {
//   // console.log(state.isDarkMode);
//   state.isDarkMode = !state.isDarkMode;
//   // console.log(state.isDarkMode);
// };

// const reducer = (state, actionType) => {
const reducer = (state, action) => {
  //  to call the relevant handler from inside
  //  if both button is doing certain responsibility
  //  actions // call that responsibility = actionType
  //  actionType: string identifier
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      state.isDarkMode = !state.isDarkMode;
      break;
    case "CHANGE_FILTER_STATUS":
      state.filterStatus = action.payload.filterStatus;
      break;
    default:
      return state;
  }
};
// const store = createStore(initialState, toggleDarkMode);
const store = createStore(initialState, reducer);

export default store;
