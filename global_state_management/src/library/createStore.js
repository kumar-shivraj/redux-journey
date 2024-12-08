//  This is library code
//  It doesn't create/know about your applications
//  It required context about your application with the help of parameters
//  I DO NOT HAVE THE ABILITY TO POLUTE THE STORE AS A APPLICATION DEVELOPER

//  handler   --->   A function that holds the logic to updating the store/state.
// const createStore = (initialState) => {
const createStore = (initialState, handler) => {
  const state = initialState;
  const getState = () => {
    return state;
  };

  const dispatch = () => {
    console.log("Invoked dispatch");
    // going to update the state, "not really"
    handler(state); // this will now update the state
  };

  return {
    getState,
    dispatch,
  };
};

export default createStore;

//  ABSTRACTION =>  we don't want to expose the implementation details, so we are returning getter function for reading the state
// This is abstraction code, it is provided by the library. We don't have access to it.
// They don't need to fit as per out application requirement, we need to fit as per their code.

//  example of how we'll be using it in our application :
//  const store = createStore({...initialState});

//  to get the state stored in the store
//  store.getState();
