import "./GrandChildCounter2.css";
const GrandChildCounter2 = ({ isDarkMode }) => {
  return (
    <div
      className={`grand-child-counter-two-wrapper ${
        isDarkMode
          ? "grand-child-counter-two-wrapper-dark"
          : "grand-child-counter-two-wrapper-light"
      }`}
    >
      <h3>GrandChildCounter2</h3>
      <h4
        className={`grand-child-counter-two-theme ${
          isDarkMode
            ? "grand-child-counter-two-dark"
            : "grand-child-counter-two-light"
        }`}
      >
        Theme : {isDarkMode ? "Dark" : "Light"}
      </h4>
    </div>
  );
};

export default GrandChildCounter2;
