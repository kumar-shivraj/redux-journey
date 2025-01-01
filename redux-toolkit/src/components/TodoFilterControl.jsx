// import React from "react";
// import { useState, useEffect } from "react";
// import store from "../todoStore";
import { changeFilterStatus } from "../actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

let statuses = [
  { id: "all", title: "All" },
  { id: "active", title: "Active" },
  { id: "completed", title: "Completed" },
];

const TodoFilterControl = () => {
  const filterStatus = useSelector((state) => state.todoReducer.filterStatus);

  const dispatch = useDispatch();

  return (
    <div className="control-btn group">
      {statuses.map((status, idx) => {
        return (
          <button
            id={status.id}
            className={filterStatus === status.id ? "btn active" : "btn"}
            onClick={() => dispatch(changeFilterStatus(status.id))}
            key={idx}
          >
            {status.title}
          </button>
        );
      })}
    </div>
  );
};

export default TodoFilterControl;
