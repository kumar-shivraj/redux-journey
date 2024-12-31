import {preferencesReducer} from "./preferencesReducer"
import {todoReducer} from "./todoReducer"
import { combineReducers } from "../library/combineReducers"

export const rootReducer = combineReducers({
  "preferencesReducer": preferencesReducer,
  "todoReducer": todoReducer
})