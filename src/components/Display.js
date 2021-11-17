import React from "react";
import "./Display.css";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.input,
    };
  }

  render() {
    let { result } = this.props;
    return <div className="display">{this.props.input}</div>;
  }
}
//const Display = (props) => <div className="display">{props.input}</div>;

export default Display;
