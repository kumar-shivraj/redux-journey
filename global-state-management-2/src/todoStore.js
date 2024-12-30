import createStore from "./library/createStore";
import combineReducers from "./library/combineReducers";

/*  ACTION TYPES START  */
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const CHANGE_FILTER_STATUS = "CHANGE_FILTER_STATUS";
/*  ACTION TYPES END  */

/*  ACTION CREATERS START HERE  */
export function changeFilterStatus(newStatus) {
  return {
    type: CHANGE_FILTER_STATUS,
    payload: newStatus,
  };
}

export function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  };
}

//  responsibility of creating an action object now lies with these above function
//  which we can now import in all our other components
//  known as action creaters

/*  ACTION TYPES END  */

/*  PREFERENCES REDUCER  */
function preferencesReducer(
  state = {
    isDarkMode: true,
    // isDarkMode: false,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
}

/*  TODO REDUCER  */
function todoReducer(
  state = {
    filterStatus: "active",
  },
  action
) {
  switch (action.type) {
    case CHANGE_FILTER_STATUS:
      return {
        ...state,
        filterStatus: action.payload,
      };
    default:
      return state;
  }
}

/*
const initialState = {
  isDarkMode: false,
  filterStatus: "active",
  // filterStatus: "all",
};
*/

// const toggleDarkMode = (state) => {
//   // console.log(state.isDarkMode);
//   state.isDarkMode = !state.isDarkMode;
//   // console.log(state.isDarkMode);
// };

/*

reducer performance issue can be solved by using slices
we can use multiple reducers instead of one reducer

*/
// const reducer = (state, actionType) => {
/*
const reducer = (state, action) => {
  //  to call the relevant handler from inside
  //  if both button is doing certain responsibility
  //  actions // call that responsibility = actionType
  //  actionType: string identifier
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      state.isDarkMode = !state.isDarkMode;
      // break;
      return state; //  this is modified state
    case "CHANGE_FILTER_STATUS":
      state.filterStatus = action.payload.filterStatus;
      // break;
      return state;
    default:
      return state;
  }
};

*/
/*
Reducer : 
  SLICE =>  start breaking down the reducer : O(1)
  should be reurn { ...state, isDarkMode: !state.isDarkMode } //  immutability
*/

/*
// const reducer = (state, action) => {
const reducer = (
  state = {
    isDarkMode: false,
    filterStatus: "active",
    // filterStatus: "all",
  },
  action
) => {
  switch (action.type) {
    // case "TOGGLE_DARK_MODE":
    case TOGGLE_DARK_MODE:
      // state.isDarkMode = !state.isDarkMode;
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    // case "CHANGE_FILTER_STATUS":
    case CHANGE_FILTER_STATUS:
      // state.filterStatus = action.payload.filterStatus;
      return {
        ...state,
        // filterStatus: action.payload.filterStatus,
        // filterStatus: action.payload,

        // filterStatus: action.filterStatus,
        filterStatus: action.payload,
      };
    default:
      console.log("default case executed");
      return state;
  }
};
*/

// const store = createStore(initialState, toggleDarkMode);
// const store = createStore(initialState, reducer);
// const store = createStore(reducer);

//  PROBLEM : How do we combine the two reducers to create a single reducer (only for the store)

//  mapping : (map => hash map) : a key value pair

//  this key is nothing but representing a "slice" of state
const reducerMappings = {
  preferencesReducer: preferencesReducer, //  slice for preferences
  todoReducer: todoReducer, //  slice for todos
};
// console.log("Reducer Mappings : ", reducerMappings);

//  combineReducer is returning a function named as combinedReducer
//  combineReducer ==> function ==> combinedRedcer
//  combinedReducer ==> function accept state and action : combinedReducer(state, action)
const store = createStore(combineReducers(reducerMappings));

/*
// ===========================================================================
// Test : Act, Assert, Expect

const tempInitialState = {
  isDarkMode: false,
  filterStatus: "active",
};

// const tempStore = createStore(tempInitialState, reducer);

let action = { type: "TOGGLE_DARK_MODE" };

//  this is expectation
let expected = { isDarkMode: true, filterStatus: "active" };
// let actual = tempStore.getState();
// let actual = reducer(tempStore.getState(), action);
let actual = reducer(tempInitialState, action); //  This is called the ACT. {isDarkMode: false, ......}

//  This is called the ASSERT / Assertion
if (JSON.stringify(expected) != JSON.stringify(actual)) {
  //  expectation was to receive an object, but returned from the reducer was undefined
  throw `Expected: ${expected} but received ${actual}`;
} else {
  console.log("Test passed for TOGGLE_DARK_MODE");
}
// ===========================================================================
*/
export default store;

/*
  Hypothesis : If our reducer is actually "impure", now if I try to write  a test for it, then that test should fail

  MUTATION : CHANGE

*/
