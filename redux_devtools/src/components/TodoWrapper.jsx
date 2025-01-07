import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoWrapper = () => {

  return (
    <>
      <TodoInput/>
      <TodoList/>
    </>
  );
};

export default TodoWrapper;
