// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducers";
import { preferencesReducer } from "./reducers/preferencesReducer";
import { todoReducer } from "./reducers/todoReducer";

const reducersMapping = {
  preferencesReducer: preferencesReducer,
  todoReducer: todoReducer,
};

// const store = createStore(rootReducer);

//  It will combine the reducers on it's own
//  inbuilt functionallity
//  all we need to do is to paas the reducer mapping
const store = configureStore({
  reducer: reducersMapping,
});
console.log(store);

export default store;
