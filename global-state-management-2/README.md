<h1 align="center">Global State Management-II : Todo App</h1>

<h3>Implemented all the major feature for the global state management with our own custom code without using redux library.</h3>

A simple and efficient Todo Application built using React and Redux concepts(without using any library), featuring a custom implementation of a Redux-like store.

## Features

- Add new todos with due dates.
- Toggle between light and dark themes.
- Filter todos based on their completion status: All, Active, or Completed.
- Custom Redux implementation with:
  - Action creators
  - Reducers
  - Middleware-like architecture
  - Modular and clean code structure.

## Project Structure

- `src/`
  - `actions/` # Action creators and action types
    - `index.js` # Action creator functions
    - `types.js` # Action type constants
  - `components/` # React components for the application
    - `Header.jsx` # Header component with theme toggler
    - `TodoFilterControl.jsx` # Controls for filtering todos
    - `TodoInput.jsx` # Input form for adding todos
    - `TodoList.jsx` # List view for todos
    - `TodoListItem.jsx` # Single todo item
    - `TodoMenu.jsx` # Footer menu with filter and todo count
    - `TodoWrapper.jsx` # Wrapper combining input and list
  - `data/` # Static data
    - `initialTodos.js` # Initial todo items
  - `library/` # Custom Redux utilities
    - `combineReducers.js` # Custom combineReducers function
    - `createStore.js` # Custom Redux-like store implementation
  - `reducers/` # Reducer functions
    - `index.js` # Root reducer combining slices
    - `preferencesReducer.js` # Reducer for theme preferences
    - `todoReducer.js` # Reducer for todo filters
  - `images/` # Icons and images
    - `icon-check.svg`
    - `icon-cross.svg`
    - `icon-moon.svg`
    - `icon-sun.svg`
  - `App.jsx` # Main application component
  - `main.jsx` # Entry point of the app

## Setup Instructions

1. Clone the Repository

   ```
   git clone https://github.com/kumar-shivraj/redux-journey.git
   cd redux-journey/global-state-management-2

   ```

2. Install Dependencies
   - `npm install`
3. Run the Application
   - `npm run dev`
4. Open in Browser
   - Visit `http://localhost:5173` to view the app.

## Core Concepts

### Custom Redux Implementation

This project uses a custom Redux-like implementation. Key components include:

- `createStore.js`: Implements dispatch, getState, and subscribe.
- `combineReducers.js`: Merges multiple reducers into a single reducer function.
- Action Creators and Reducers:
  - `preferencesReducer.js`: Manages theme state (dark/light mode).
  - `todoReducer.js`: Manages the filter state for todos.

### Evolution of Global State Management

This application's global state management started from humble beginnings.

1. **Basic State Management**: The first iteration of the application managed a single state, the todo list. The state was managed using the `useState` hook. The state was updated when a new todo was added, when a todo was marked as completed, or when the list was filtered.

2. **Adding Theme State**: As the application evolved, the need for managing multiple states arose. The theme state was introduced, which allowed users to switch between light and dark themes. The state was managed using the `useState` hook. To manage the theme state and the todo list state, the code was refactored to use the `useReducer` hook.

3. **Actions and Reducers**: The next step was to create action creators and reducers, similar to Redux. The action creators were functions that returned objects with type and payload properties. The reducers were functions that took the state and action as arguments and returned the new state. The root reducer was created by combining multiple reducers using the `combineReducers` function.

4. **Custom Redux Implementation**: The final step was to implement a custom Redux-like implementation. The `createStore` function was implemented, which took the reducer function and the initial state as arguments and returned the store object. The store object was used to dispatch actions, subscribe to state changes, and get the current state. The `combineReducers` function was implemented to combine multiple reducers into a single reducer function.

5. **Middleware-like Architecture**: To add support for middleware-like functions, the application's architecture was refactored. The `createStore` function was modified to accept middleware functions as arguments. The middleware functions were used to wrap the dispatch function and add additional behavior.

### Components

- `Header`: Includes the theme toggle button.
- `TodoFilterControl`: Provides controls for filtering todos.
- `TodoInput`: Handles the creation of new todos.
- `TodoList`: Displays todos based on the selected filter.
- `TodoListItem`: Represents a single todo item.
- `TodoMenu`: Provides a count of remaining todos and filter options.
- `TodoWrapper`: Combines the input and list components.

## Future Improvements

- Add support for editing and deleting todos.
- Persist todos and theme settings using local storage or a backend API.
- Improve UI/UX with animations and additional styling.
