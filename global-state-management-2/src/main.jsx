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
