import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoReducer",
  initialState: {
    filterStatus: "all",
    todos: [],
  },
  reducers: {
    changeFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },

    addTodo: (state, action) => {
      state.todos.push(action.payload); //  payload is some new todo
    },

    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          // completed status changes
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

console.log("todo slice : ", todoSlice);
// we need to export the actions as well in order to dispatch that
export const { changeFilterStatus, addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
