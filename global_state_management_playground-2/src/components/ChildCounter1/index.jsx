import GrandChildCounter1 from "../GrandChildCounter1";
import GrandChildCounter2 from "../GrandChildCounter2";
import "./ChildCounter1.css";
const ChildCounter1 = ({ count, setCount }) => {
  return (
    <div className="child-counter-one-wrapper">
      <h2>ChildCounter1</h2>
      <div className="child-counter-one-container">
        <GrandChildCounter1 count={count} setCount={setCount} />
        <GrandChildCounter2 />
      </div>
    </div>
  );
};

export default ChildCounter1;
