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



********         Global Store Creation and Usage        ********
          1. Is createStore Called Multiple Times or Just Once?
            * createStore is called only once in todoStore.js. 
              The store is created when the todoStore.js file is first imported anywhere in out app. 
              This means that no matter how many times we import todoStore.js in various files (e.g., App.js, Header.js, etc.), 
              createStore will only be executed once to initialize the store with the INITIAL_STATE.

            * JavaScript Module System:
              JavaScript modules (like ES6 imports/exports) work in a way that when a module is imported, 
              it is executed only once during the application's lifecycle (unless you are using dynamic imports). This is called module caching.

              After the initial execution of todoStore.js (when it calls createStore), the module is cached by the JavaScript engine,
              and any subsequent imports of todoStore.js will reuse the same instance of the store, meaning createStore will not be called again.


          2.  Why Don't we Call createStore in App.js, Header.js, or Other Files?
            * The reason we don't need to call createStore in other files is because:
                We are importing the todoStore in those files. The import of todoStore brings in the already created store, 
                so we don't need to call createStore again, and the store is a single instance which was instantiated when the todoStore.js module was loaded for the first time.

            * What's happening behind the scenes:
              When todoStore is imported, it doesn't trigger createStore to run again. 
              Instead, the import brings in the already created todoStore object. This is due to how JavaScript modules work (with caching).

              In other words, the store is created once when todoStore.js is first loaded, 
              and all other imports just reference that single instance of the store.

          
          3. How Is the Store "Created" Without Calling createStore in Other Files?
            * When we import todoStore in files like App.js or Header.js, we're simply referring to the exported todoStore object 
              that was created in todoStore.js. Here's how it works:
                * Initial Call: The first time any part of your app imports todoStore.js, the JavaScript engine:
                  Executes the code in todoStore.js (which calls createStore(INITIAL_STATE) and creates the store).
                  Creates the store instance and assigns it to the todoStore constant.
                  Then, it exports the todoStore instance.
                
                * Subsequent Imports: 
                  On subsequent imports of todoStore in other files like App.js, Header.js, etc., 
                  JavaScript does not re-run createStore. Instead, it simply reuses the already created todoStore (because of module caching).

                * What You Get: 
                    Every time you import todoStore, you are getting the same store instance (the one created when the module was first loaded), 
                    which holds the state (isDarkMode: false) and provides the getState method to access it.

          4. No Need to Call createStore in App.js or Header.js:
            * When we import todoStore in App.js, Header.js, or any other component, we're not calling createStore again. 
              We’re simply getting the already created store instance that was exported from todoStore.js. That means:
                  We don’t need to call createStore again in those files.
                  We only interact with the store through the todoStore object, using methods like getState() to read the current state.
          
          *   In Summary for above 4 points :
              *   createStore is called only once when todoStore.js is first imported anywhere in the app. 
                  This is because JavaScript modules are cached after their initial execution.
              *   After the initial import, all other imports of todoStore.js simply refer to the same store instance, 
                  and we can use the getState() method to access the state.
              *   We don't need to call createStore in every file where you import the store. It’s already been created once and shared across your app.
              *   This is a fundamental aspect of how the ES6 module system works: modules are cached after their first evaluation, 
                  so all imports refer to the same instance of the module.
*/
