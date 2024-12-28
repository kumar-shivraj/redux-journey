import GrandChildCounter3 from "../GrandChildCounter3";
import GrandChildCounter4 from "../GrandChildCounter4";
import "./ChildCounter2.css";
const ChildCounter2 = ({ count, setCount }) => {
  return (
    <div className="child-counter-two-wrapper">
      <h2>ChildCounter2</h2>
      <div className="child-counter-two-container">
        <GrandChildCounter3 />
        <GrandChildCounter4 count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default ChildCounter2;
