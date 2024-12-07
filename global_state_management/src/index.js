import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
  useState  --->  Define a state "isDarkMode" in Header.js
            --->  Define a similar state "isDarkMode" in TodoFilterControl.js (false)

        setIsDarkMode(true) in Button

        But if we use it in different componet then it will not work as expected because it is a local state

  Possible Solution :
      *   One thing we can do is to store the state in parent of the component and pass it down to the child component
          Here only common ancestor is App.js so we need to store the state in App.js
          const [isDarkMode, setIsDarkMode] = useState(false);
          the issue with this approach is that we need to pass the state down to all the child components, which is not ideal
          also in case of any issue, we need to debug a lot in order to find the issue

          so, we are having below issue from above :
          1. Performance issue
          2. Debugging issue
          
          In this project, we will try to use different approach to achieve the same result
          We will create a global store to store the state and use it across all the components wherever needed
      

          Do all of the states need to be in the global store? No!
          Here are a couple of common rules of thumb for determining what kind of data should be put into Global Store:
            a.  Is this state causing prop drilling? If yes, put such states in the global store.
            b.  Is the same state data being used to drive multiple components i.e. is the state being shared across multiple components at different levels? If yes, put such states in the global store.


          Just before going for global state management, lets see how to manage local state
            * Managing local state : using with useState
                1.  Initialize the state
                2.  Read the state
                3.  Update the state
                4.  Subscribing/Listening to the state

          Global Store
            *   Store refers to a centralized data container that holds the state of an application.
            *   Store serves as a single source of truth for the application's data, allowing different components to access and update the state without the need for direct prop passing between parent and child components.
            *   Store is not a class. It's just an object with a few methods on it.
                *   Syntax Example => 
                    store = {
                      const someData = {}

                      function sumMethod() {
                        
                      }
                    }  
          Essential Aspects of State Management
            * Our library developer from his exploration figured out that there are 4 essential components that any state management solution should provide
              1.  Way to initialize state
                  =>  const [isDarkMode, setIsDarkMode] = useState(false); initializing the state using vanilla React.

              2.  Way to read state
                  =>  isDarkMode is the state variable used to read the state.

              3.  Way to update state
                  =>  setIsDarkMode is the setter function used to update the value of isDarkMode.

              4.  Way to get updated state
                  =>  Updating the state using the setter function setIsDarkMode, React will automatically re-render the component with the updated state.


                  
          *   Same thing is true for global store. Essential aspect of state management library : 
              1.  Way to initialize state
              2.  Way to read state
              3.  Way to update state
              4.  Way to get updated state


*/
