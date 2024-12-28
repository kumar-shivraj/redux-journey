import GrandChildCounter3 from "../GrandChildCounter3";
import GrandChildCounter4 from "../GrandChildCounter4";
import "./ChildCounter2.css";
// eslint-disable-next-line react/prop-types
// const ChildCounter2 = ({ isDarkMode }) => {
const ChildCounter2 = () => {
  return (
    <div className="child-counter-two-wrapper">
      <h2>ChildCounter2</h2>
      <div className="child-counter-two-container">
        {/* <GrandChildCounter3 isDarkMode={isDarkMode} /> */}
        <GrandChildCounter3 />
        <GrandChildCounter4 />
      </div>
    </div>
  );
};

export default ChildCounter2;
