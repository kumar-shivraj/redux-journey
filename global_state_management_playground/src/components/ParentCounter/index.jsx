// import { useState } from "react";
import ChildCounter1 from "../ChildCounter1";
import ChildCounter2 from "../ChildCounter2";
import counterStore from "../../../counterStore";

import "./ParentCounter.css";
const ParentCounter = () => {
  // const [count, setCount] = useState(0);
  const count = counterStore.getState().count;
  // const setCount = counterStore.getState().setCount;

  return (
    <div className="parent-counter-wrapper">
      <h1>ParentCounter</h1>
      <h2 className="counter">Count : {count}</h2>
      <div className="parent-counter-container">
        {/* <ChildCounter1 count={count} setCount={setCount} /> */}
        {/* <ChildCounter2 count={count} setCount={setCount} /> */}
        <ChildCounter1 />
        <ChildCounter2 count={count} />
      </div>
    </div>
  );
};

export default ParentCounter;
