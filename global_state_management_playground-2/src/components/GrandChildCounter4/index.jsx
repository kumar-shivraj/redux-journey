// import { useState } from "react";
import { useEffect } from "react";
import counterStore from "../../../counterStore";
import "./GrandChildCounter4.css";
// const GrandChildCounter4 = ({ count, setCount }) => {
const GrandChildCounter4 = () => {
  // const [count, setCount] = useState(0);
  const count = counterStore.getState().count;
  //  creating the localState to force render when count is changed
  // const [localCount, setLocalCount] = useState(10);

  /**
   * Increment the count in the global store and update the local state.
   *
   * The local state is used to force a re-render of the component when the count
   * changes.
   */
  // const handleIncrement = () => {
  //   counterStore.dispatch();

  //   //  updating the localState
  //   setLocalCount(counterStore.getState().count);
  //   console.log("localCount : ", localCount);
  // };

  // const handleIncrement = () => {
  //   counterStore.dispatch();

  //   const counterElement = document.querySelector(
  //     ".grand-child-counter-four-wrapper .counter"
  //   );
  //   counterElement.innerText = `Count : ${counterStore.getState().count}`;
  // };

  const handleIncrement = () => {
    counterStore.dispatch({
      type: "INCREMENT",
      payload: 10,
    });
  };

  const handleDecrement = () => {
    counterStore.dispatch({
      type: "DECREMENT",
      payload: 10,
    });
  };

  useEffect(() => {
    counterStore.subscribe(() => {
      const counterElement = document.querySelector(
        ".grand-child-counter-four-wrapper .counter"
      );
      counterElement.innerText = `Count : ${counterStore.getState().count}`;
    });
  });
  return (
    <div className="grand-child-counter-four-wrapper">
      <h3>GrandChildCounter4</h3>
      <h2 className="counter">Count : {count}</h2>
      {/* <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button> */}

      {/* <button onClick={() => {}}>-</button> */}
      <button onClick={handleDecrement}>-10</button>
      <button onClick={handleIncrement}>+10</button>
    </div>
  );
};

export default GrandChildCounter4;
