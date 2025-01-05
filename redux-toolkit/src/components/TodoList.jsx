/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoMenu from "./TodoMenu";
// import store from "../todoStore";

import data from "../data/initialTodos";
import { useSelector } from "react-redux";

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  // eslint-disable-next-line no-unused-vars
  // const [todos, setTodos] = useState(data);
  const todos = useSelector((state) => state.todoReducer.todos);

  const isDarkMode = useSelector(
    (state) => state.preferencesReducer.isDarkMode
  );
  const filterStatus = useSelector((state) => state.todoReducer.filterStatus);

  useEffect(() => {
    const handleFilterTodos = (todos, filterStatus) => {
      console.log("Before filtering, filteredTodos : ", filteredTodos);
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
      // console.log("After filtering, filteredTodos : ", filteredTodos);
      console.log("After filtering, filteredTodos : ", todos);
    };

    // handleFilterTodos(todos, filterStatus);
    handleFilterTodos(todos, filterStatus);
  }, [filterStatus, todos]);

  console.log("parent : Inside useEffect of TodoMenu, todos : ", todos);

  return (
    <>
      <section
        className={`todo-list-section ${
          isDarkMode && "todo-list-section-dark"
        }`}
      >
        {filteredTodos.length < 1 ? (
          // eslint-disable-next-line react/no-unescaped-entities
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
