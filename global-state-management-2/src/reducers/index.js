import combineReducers from "../library/combineReducers";
import preferencesReducer from "./preferencesReducer";
import todoReducer from "./todoReducer";

const reducerMappings = {
  preferencesReducer: preferencesReducer, //  slice for preferences
  todoReducer: todoReducer, //  slice for todos
};

const rootReducer = combineReducers(reducerMappings);

export default rootReducer;
