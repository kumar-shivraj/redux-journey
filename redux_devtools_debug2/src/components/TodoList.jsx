import React, { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoMenu from "./TodoMenu";
import store from "../todoStore";

// import data from "../data/initialTodos"
import { useSelector } from "react-redux";

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  // const [todos, setTodos] = useState(data);

  const isDarkMode = useSelector(state => state.preferencesReducer.isDarkMode);
  const filterStatus = useSelector(state => state.todoReducer.filterStatus);
  const todos = useSelector(state => state.todoReducer.todos);

  useEffect(() => {
    const handleFilterTodos = (todos, filterStatus) => {
      switch (filterStatus) {
        case "active":
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break  
        default:
          setFilteredTodos([...todos]) 
          break
      }
    };
    
    handleFilterTodos(todos, filterStatus);
  }, [filterStatus, todos]);

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
              <TodoListItem
                todo={todo}
                key={todo.id}
                todos={todos}
              />
            ))}
          </ul>
        )}

        <TodoMenu todos={todos} />
      </section>
    </>
  );
};

export default TodoList;
