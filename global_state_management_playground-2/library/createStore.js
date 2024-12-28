// const createStore = (initialState = { count: 0 }) => {
// const createStore = (initialState = { count: 0 }, handler) => {
const createStore = (initialState, reducer) => {
  let state = initialState;
  const subscribers = [];

  const getState = () => state;

  // const dispatch = () => {
  //   handler(state);

  //   subscribers.forEach((subscriber) => subscriber());
  // };

  const dispatch = (action) => {
    reducer(state, action);

    subscribers.forEach((subscriber) => subscriber());
  };

  const subscribe = (callback) => {
    subscribers.push(callback);
  };

  return { getState, dispatch, subscribe };
};

export default createStore;
