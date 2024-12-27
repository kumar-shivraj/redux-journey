//  This is library code
//  It doesn't create/know about your applications
//  It required context about your application with the help of parameters
//  I DO NOT HAVE THE ABILITY TO POLUTE THE STORE AS A APPLICATION DEVELOPER

//  handler   --->   A function that holds the logic to updating the store/state.
// const createStore = (initialState) => {
const createStore = (initialState, handler) => {
  const state = initialState;

  const subscribers = []; // array -->  F1, F2, F3, .....  --> all of these are functions

  const getState = () => {
    return state;
  };

  const dispatch = () => {
    console.log("Invoked dispatch");
    // going to update the state, "not really"
    handler(state); // this will now update the state
    //  we are now new value of the state

    //  F1, F2, F3, .....
    //  example of the callback : updating the image source in Header
    subscribers.forEach((subscriber) => {
      subscriber();
    });
  };

  const subscribe = (callback) => {
    subscribers.push(callback);
  };

  return {
    getState,
    dispatch,
    subscribe,
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

/*
  After implementing both the approaches for "Way to get updated state",  We come to below observation :
  1.  Need to perfoem certain operations(eg : UI Updates like changing the icon, 
  changing the text etc) once we call the dispatch(F1, F2, F3, .....) --> Array --> [F1, F2, ......] and so

  2.  These functions/subscribers need to get executed somewhere inside the dispatch
  3.  Execution will be done after the handler() is called


  ------  Where to push the callback function to the subscribers array  ------
  * Push the callback/operation/subscriber from the componen where you want to listen for the changes

  ------  When to Push ---------
  * Push immediately as soon as the component gets mounted(useEffect)

*/
