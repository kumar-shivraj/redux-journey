import GrandChildCounter1 from "../GrandChildCounter1";
import GrandChildCounter2 from "../GrandChildCounter2";
import "./ChildCounter1.css";
// eslint-disable-next-line react/prop-types
const ChildCounter1 = ({ isDarkMode }) => {
  return (
    <div className="child-counter-one-wrapper">
      <h2>ChildCounter1</h2>
      <div className="child-counter-one-container">
        <GrandChildCounter1 />
        <GrandChildCounter2 isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default ChildCounter1;
