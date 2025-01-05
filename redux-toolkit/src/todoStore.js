// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducers";
// import { preferencesReducer } from "./reducers/preferencesReducer";
// import { todoReducer } from "./reducers/todoReducer";
// import preferencesSlice from "./slices/preferencesSlice";
// import todoSlice from "./slices/todoSlice";
import reducersMapping from "./slices/index";
// const reducersMapping = {
//   preferencesReducer: preferencesReducer,
//   todoReducer: todoReducer,
// };

// const store = createStore(rootReducer);

//  It will combine the reducers on it's own
//  inbuilt functionallity
//  all we need to do is to paas the reducer mapping
const store = configureStore({
  reducer: reducersMapping,
});
console.log(store);

// console.log("Preferences slice : ", preferencesSlice);
// console.log(
//   "Preferences slice initial state : ",
//   preferencesSlice.getInitialState()
// );

// console.log("todo slice : ", todoSlice);
// console.log("todo slice initial state : ", todoSlice.getInitialState());
export default store;
