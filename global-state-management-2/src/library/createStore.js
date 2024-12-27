// const createStore = (initialState, handler) => {
const createStore = (initialState, reducer) => {
  const state = initialState;

  const subscribers = [];

  const getState = () => {
    return state;
  };

  //   const dispatch = (actionType) => {
  const dispatch = (action) => {
    //  action is an object now with type and payload
    console.log("Invoked Dispatch");
    // console.log("action type : ", actionType);
    console.log("action type : ", action);
    // handler(state);
    reducer(state, action);
    subscribers.forEach((callback) => callback());
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
