import React, { useState, useEffect } from "react";
import TodoFilterControl from "./TodoFilterControl";
import todoStore from "../todoStore";

const TodoMenu = ({ todos }) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);
  const isDarkMode = todoStore.getState().isDarkMode;

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  useEffect(() => {
    todoStore.subscribe(() => {
      // ======   just for the verification purpose   ========
      const newIsDarkMode = todoStore.getState().isDarkMode;

      // =====================================================

      const spanEl = document.getElementById("state-span");
      // spanEl.innerText = isDarkMode ? "dark" : "light";
      spanEl.innerText = newIsDarkMode ? "dark" : "light";
    });
  }, []);

  return (
    <div className="todo-filter-control">
      <div className="todos-count">{leftTodoCount} items left</div>
      {/* even after changing the state in the store, below component will not re-render
      here also we need to do dom manipulation for updating the DOM as per second approach.
      */}
      {/* <div>The state of theme is : {isDarkMode ? "Dark" : "Light"}</div> */}
      <div>
        The state of theme is :{" "}
        <span id="state-span">{isDarkMode ? "Dark" : "Light"}</span>
      </div>
      <div className="control-btn group filter-control-for-desktop">
        <TodoFilterControl
        // filterStatus={filterStatus}
        // setFilterStatus={setFilterStatus}
        />
      </div>

      {/* <div className="control-btn">
        <button 
          className="btn" 
          // onClick={() => store.dispatch(clearCompletedTodos())}
        >
          Clear Completed
        </button>
      </div> */}
    </div>
  );
};

export default TodoMenu;
