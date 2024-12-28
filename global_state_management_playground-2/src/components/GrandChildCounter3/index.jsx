import counterStore from "../../../counterStore";
import "./GrandChildCounter3.css";
// eslint-disable-next-line react/prop-types
// const GrandChildCounter3 = ({ isDarkMode }) => {
const GrandChildCounter3 = () => {
  const isDarkMode = counterStore.getState().isDarkMode;
  return (
    <div
      className={`grand-child-counter-three-wrapper ${
        isDarkMode
          ? "grand-child-counter-three-wrapper-dark"
          : "grand-child-counter-three-wrapper-dark-light"
      }`}
    >
      <h3>GrandChildCounter3</h3>
    </div>
  );
};

export default GrandChildCounter3;
