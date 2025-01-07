import { createSlice } from "@reduxjs/toolkit";
import data from "../data/initialTodos";

const todoSlice = createSlice({
    name: "todoReducer",
    initialState: {
        filterStatus: "all",
        todos: data
    },
    reducers: {
        changeFilterStatus: (state, action) => { 
            state.filterStatus = action.payload; 
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action) =>{
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });
        }
    }
});

console.log(todoSlice);
console.log(todoSlice.getInitialState());

// export default todoSlice;
export const { changeFilterStatus, addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;