import { useEffect, useState } from "react";
import store from "../todoStore";

let statuses = [
  { id: "all", title: "All" },
  { id: "active", title: "Active" },
  { id: "completed", title: "Completed" },
];

const TodoFilterControl = () => {
  // let filterStatus = "all";
  //   const filterStatus = store.getState().filterStatus;
  const [localFilterStatus, setLocalFilterStatus] = useState(
    store.getState().filterStatus
  );

  const handleThemeChange = (newStatus) => {
    // store.dispatch("CHANGE_FILTER_STATUS");

    //  creating an action object
    //  payload is absolutely optional, if we need to paas some additional information then we paas it in payload
    //  payload can be anything : it can be number, string, boolean, object, etc....
    store.dispatch({
      type: "CHANGE_FILTER_STATUS",
      payload: {
        filterStatus: newStatus,
      },
    });
  };

  useEffect(() => {
    store.subscribe(() => {
      setLocalFilterStatus(store.getState().filterStatus);
    });
  }, []);
  return (
    <div className="control-btn group">
      {statuses.map((status, idx) => {
        return (
          <button
            id={status.id}
            // className={filterStatus === status.id ? "btn active" : "btn"}
            className={localFilterStatus === status.id ? "btn active" : "btn"}
            key={idx}
            onClick={() => handleThemeChange(status.id)}
          >
            {status.title}
          </button>
        );
      })}
    </div>
  );
};

export default TodoFilterControl;
