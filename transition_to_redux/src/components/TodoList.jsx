// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoMenu from "./TodoMenu";
// import store from "../todoStore";
import { useSelector } from "react-redux";
import data from "../data/initialTodos";

// const TodoList = ({ /*isDarkMode*/ }) => {
const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [todos, setTodos] = useState(data);

  // const isDarkMode = store.getState().preferencesReducer.isDarkMode;
  // const [isDarkMode, setIsDarkMode] = useState(store.getState().preferencesReducer.isDarkMode);
  const isDarkMode = useSelector(
    (state) => state.preferencesReducer.isDarkMode
  );
  const filterStatus = useSelector((state) => state.todoReducer.filterStatus);

  useEffect(() => {
    const handleFilterTodos = (todos, filterStatus) => {
      switch (filterStatus) {
        case "active":
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break;
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break;
        default:
          setFilteredTodos([...todos]);
          break;
      }
    };

    // let filterStatus = store.getState().todoReducer.filterStatus;
    handleFilterTodos(todos, filterStatus);

    // store.subscribe(() => {
    //   let {filterStatus} = store.getState().todoReducer;
    //   handleFilterTodos(todos, filterStatus);
    // });

    // store.subscribe(() => {
    //   setIsDarkMode(store.getState().preferencesReducer.isDarkMode);
    // });
  }, [filterStatus]);

  return (
    <>
      <section
        className={`todo-list-section ${
          isDarkMode && "todo-list-section-dark"
        }`}
      >
        {filteredTodos.length < 1 ? (
          <p className="info-text">There's no todos</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo, i) => (
              <TodoListItem todo={todo} key={todo.id} todos={todos} />
            ))}
          </ul>
        )}

        <TodoMenu todos={todos} />
      </section>
    </>
  );
};

export default TodoList;
