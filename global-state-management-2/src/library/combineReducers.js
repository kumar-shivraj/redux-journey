const combineReducers = (reducerMappings) => {
  const initialState = {};

  //   Object.keys(reducerMappings)   =>   ["preferencesReducer", "todoReducer"]
  Object.keys(reducerMappings).forEach((id) => (initialState[id] = undefined));
  console.log("Initial State : ", initialState);

  const combinedReducer = (state = initialState, action) => {
    let newState = { ...state };

    Object.entries(reducerMappings).forEach(([id, reducer]) => {
      //  newState["preferencesReducer"] = reducer(newState["preferencesReducer"], action)
      newState[id] = reducer(newState[id], action);
      console.log("New State : ", newState);
    });

    return newState;
  };

  return combinedReducer;
};

export default combineReducers;

/*
//  the new version of the state will look like below :
state = {
  preferencesReducer: {
    isDarkMode: false,
  },
  todoReducer: {
    filterStatus: "active",
  },
}

*/
