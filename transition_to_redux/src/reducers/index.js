import { preferencesReducer } from "./preferencesReducer";
import { todoReducer } from "./todoReducer";
// import { combineReducers } from "../library/combineReducers"
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  preferencesReducer: preferencesReducer,
  todoReducer: todoReducer,
});
