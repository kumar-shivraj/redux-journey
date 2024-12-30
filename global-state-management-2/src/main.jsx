import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
###     To maintain and update the multiple state in with global state management we need to consider below points
*   We'll call the dispatch by passing the object(action) as argument instead of passing without any arguments.
    *   This object will be having two things : 
        i. type : this is type of action which decides what to do with the state
        ii. payload : if any additional information is needed then we can send it through the payload. For example updating the state will require some data that needs to be paased during dispatch, so we can paas it through the payload
*   Now, library function dispatch will accept one parameter as an object and this dispatch function will call reducer function by passing state and this object internally instead of calling the handler function by just passing the state.
    This is good for handling multiple actions instead of single one.

*   Now, library team will take second input as reducer instead of handler in order to handle the multiple actions instead of one single action.
*   We need to create the reducer in our todoStore instead of creating single handler.
    This reducer will receive the state and action as arguments and will return the new state.
    It will be called internally by dispatch function.
    It will update the state depending on the type of action.


*/

/*
  //  pure function
  function add(a, b) {
    return a + b
  }

  line 37 : add(1, 2) => 3

  line 45 : add(1, 2) => 3

  ...

  add(1, 2) => 3
  add(1, 2) => 3

  Characteristics :
  1.  Deterministic
  2.  No Side effects


  addComplex(a, b) {
    //  complex math operation
    return a + b
  }



  const someCachedValue = addComplex(7, 17) =>  //  24

  Secondary Benefits :
  1.  I can write tests for it("expect" your function to behave in a certain manner --> "assertion")
  2.  Parallelization / Concurrency =>  Performance improvements
  3.  We can cache/memoize the result


*/

/*

  Let's talk about performance

  //  Identify the problem here ?? --> Avoiding calling all the subscribers function on every dispatch call
  //  What is the solution // How do we optimize ?



*/

/*  

There is a possibility that when we are trying to dispatch an action, I can make assumptions about what to paas to the object.


Example : we want to store user's date
for update the username, below is the object that we can pass during calling the dispatch function :
{
  type: "UPDATE_USERNAME",
  userName: "newUserName"
}

Here we made the assumption for the structure of this object which is very common thing, but reducer will not accept this as reducer expects the object with two things : type and payload.


Just like we added a consistency / uniformity in the action type to avoid silly mistakes,
Same thing we will do for the action object in it's entirety.
We'll create a function to create the action object : action creaters
This function is known as "action creaters"

*/
