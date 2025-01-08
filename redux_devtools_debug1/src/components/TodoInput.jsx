import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import store  from "../todoStore";

const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const TodoInput = (/*{ isDarkMode }*/) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [dueDate, setDueDate] = useState(getCurrentDate());

  const dispatch = useDispatch();

  const isDarkMode = useSelector(state => state.preferencesReducer.isDarkMode);
  
  const handleTodoTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({
      id: Math.floor(Math.random() * 100),
      content: todoTitle,
      dueDateInMs: dueDate,
      completed: false
    }));

    setTodoTitle("");
    setDueDate(getCurrentDate());
  }

  return (
    <div className={`form-control  ${isDarkMode && "form-control-dark"}`}>
      <div className="checkbox-border-wrap">
        <span className="checkbox"></span>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="todoTitle">Add New Todo</label>
        <input
          type="text"
          name="todo-input"
          className={`todo-input ${isDarkMode && "todo-input-dark"}`}
          id="todoTitle"
          placeholder="Type and press enter to add new todo.."
          value={todoTitle}
          onChange={handleTodoTitleChange}
          required
        />
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          className="due-date-input"
          value={dueDate}
          onChange={handleDueDateChange}
          required
        />
      </form>
    </div>
  );
};

export default TodoInput;
