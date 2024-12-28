// import { useState } from "react";
import counterStore from "../../../counterStore";
import "./GrandChildCounter1.css";
// const GrandChildCounter1 = ({ count, setCount }) => {
const GrandChildCounter1 = () => {
  // const [count, setCount] = useState(0);
  const count = counterStore.getState().count;
  // const [localCount, setLocalCount] = useState(0);

  // const handleIncrement = () => {
  //   counterStore.dispatch();

  //   //  updating the localState
  //   setLocalCount(counterStore.getState().count);
  //   console.log("localCount : ", localCount);
  // };

  const handleIncrement = () => {
    // counterStore.dispatch();
    counterStore.dispatch({
      type: "INCREMENT",
      payload: 1,
    });
  };

  const handleDecrement = () => {
    // counterStore.dispatch();
    counterStore.dispatch({
      type: "DECREMENT",
      payload: 1,
    });
  };

  return (
    <div className="grand-child-counter-one-wrapper">
      <h3>GrandChildCounter1</h3>
      <h2 className="counter">Count : {count}</h2>
      {/* <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button> */}

      {/* <button onClick={() => {}}>-</button>
      <button onClick={() => {}}>+</button> */}

      {/* <button onClick={() => {}}>-</button> */}
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrement}>+1</button>
    </div>
  );
};

export default GrandChildCounter1;
