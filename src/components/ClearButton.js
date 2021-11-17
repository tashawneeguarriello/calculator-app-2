import "./ClearButton.css";

const ClearButton = (props) => (
  <div className="clear-input" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;
