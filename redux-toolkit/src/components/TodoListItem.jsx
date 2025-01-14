/* eslint-disable react/prop-types */
// import React from "react";
import { useDispatch } from "react-redux";
import IconCheck from "../images/icon-check.svg";
import { toggleTodo } from "../slices/todoSlice";

const TodoListItem = ({ todo }) => {
  const classes = todo.completed ? "completed" : "";
  const checkIcon = todo.completed ? (
    <img src={IconCheck} alt="Completed" />
  ) : (
    ""
  );
  const dispatch = useDispatch();
  const handleToggleTodo = () => {
    console.log("Inside handleToggleTodo, todoId : ", todo.id);
    dispatch(toggleTodo(todo.id));
  };
  return (
    <li className={classes}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
        defaultChecked={todo.completed}
      />
      <div className="checkbox-border-wrap" onClick={handleToggleTodo}>
        <span className="checkbox">{checkIcon}</span>
      </div>
      <p>{todo.content}</p>
    </li>
  );
};

export default TodoListItem;
