// const createStore = (initialState, handler) => {
// const createStore = (initialState, reducer) => {
const createStore = (reducer) => {
  // let state = initialState;
  let state;

  const subscribers = [];

  const getState = () => {
    return state;
  };

  // here we're having performance issue in two palces :
  // 1.  calling the reducer function
  // 2.  calling the subscribers  : bottleneck
  // for any changes in the state, all the subscriber function will be called at once
  //  here we can optimize the calling all the sbscriers function

  //   const dispatch = (actionType) => {
  // const dispatch = (action) => {
  //   //  action is an object now with type and payload
  //   // console.log("Invoked Dispatch");
  //   // console.log("action type : ", actionType);
  //   // console.log("action type : ", action);
  //   // handler(state);
  //   reducer(state, action);
  //   subscribers.forEach((callback) => callback());
  // };

  // const dispatch = (action) => {
  //   const newState = reducer(state, action);
  //   //  This thing won't work as we're getting the new state from the reducer
  //   //  The reducer is mutating the state and returning the same so both newState and state will be same
  //   if (newState !== state) {
  //     console.log("Invoked Dispatch");
  //     subscribers.forEach((callback) => callback());
  //   }
  // };

  //  idea of dispatch is to be invoked such that a new value is assigned to the state
  const dispatch = (action) => {
    const prevState = state;
    //  assigning the new value to the state
    state = reducer(state, action);
    console.log("Invoked Dispatch");

    if (prevState !== state) {
      console.log("About to call subscriber function");
      subscribers.forEach((callback) => callback());
    }
  };

  //  here action is an empty object being passed
  //  so here, during the call of reducer function inside dispatch, reducer will not receive any arguments for the state, so that reducer will receive it as undefined.
  //  But in the reducer function declaration, if we don't pass any arguments, it will take a default state as mentioned in the reducer function

  //  the action.type is undefined in the reducer function so default case will be executed inside
  //  reducer function and the state will be initialized to initialState from the reducer function
  //  so, the responsibility of initializing the state lies with the reducer function now instead of the todoStore/createStore

  dispatch({});

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

/*
  prevState => x
  newState  => x
  
  here nothing has changed. so no need to call the subscribers

  if(prevState !== newState) {
    // we'll want to call the subscribers
  }
  
  We can't do a "shallow" comparison of objects in the if statement
  Reason is : ===
  It checks by "reference"

  const obj = {foo: 1, bar: 2}
  const newObj = obj

  newObj.foo = 2

  if we now compare both this objects, it will return true

  console.log(obj === newObj) // true


  //  Shall we try with JSON.stringify()
  //  There is a problem/caveat with JSON.stringify()
  //  for some reason it doesn't work properly with dates.
  //  for example if we want to store date in our state :
    { createdAt: Date() }   ==> Convert to string but behaves differently
  //  for undefined also it doesn't work properly
  //  {foo: undefined } ==> { "foo" : {} }

  // //  "Interview Tip" 
  // JSON.parse(JSON.stringify(obj)) ==> deep clone
  // if we try above code, it is worst performing code we're writing, browser will suffer for this
  // if it is small thing then it is fine but if it is large then it will be a performance issue


  ****    So from the above, we can't use direct comparison(===), and we can't even use JSON.stringify()  ****
  So, what can we do ?
  

  function isMathcing(obj1, obj2) {
    // return obj1 ===  obj2  //  we can't do this directly

    if(typeof obj1 === "object" && typeof obj2 === "object") {
      const obj1Keys = Object.keys(obj1);
      const obj2Keys = Object.keys(obj2);

      if(obj1Keys.length !== obj2Keys.length) {
          return false;
      }

      //  this will go for recustion
      //  there is possibilities for stack overflow : "dangerous"
      for(key of obj1Keys) {
          if(!isMathcing(obj1[key], obj2[key])) {
              return false;
          }
      }

    }

    return obj1 === obj2; //  if one is premitive, one is object; or both are premitive. This will work


  }

  if(!isMathcing(currState, nextState)) {
    // we'll want to call the subscribers
    subscribers.forEach((callback) => callback());
  }


  //  above comparison work with basic objects comparisons but not with nested objects or arrays
  //  if object grows then it will be a performance issue due to recursion call

*/

//  ****    So, the solution is not the above one as well  ****
//  ****    So, the solution is IMMUTIBILITY  ****

/*

We'll return the new object from the reducer function instead of mutating the state directly

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case "CHANGE_FILTER_STATUS":
      return {
        ...state,
        filterStatus: action.payload.filterStatus,
      };
    default:
      return state;
  }
};

and we'll reassign the state to the new object returned from the reducer inside the dispatch function

const dispatch = (action) => {
  state = reducer(state, action);
};


now we can do the shallow comparison
we don't need recursive comparison anymore

if(currState !== newState) {
  // we'll want to call the subscribers
  subscribers.forEach((callback) => callback());
}

*/
