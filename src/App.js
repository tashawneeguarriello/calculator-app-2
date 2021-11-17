import React from "react";
import "./App.css";
import Display from "./components/Display.js";
// import ClearButton from "./components/ClearButton";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      // displayValue (What the screen currently displays)
      //displayValue: '0',
      // previousValue (What value the user selected before pressing an operation button)
      //previousValue: [],
      // operation (What operation the user is performing (+/-/÷/x))
      operation: " ",
      result: "",
    };
  }

  addUserInput = (event) => {
    this.setState({
      input: this.state.input + event.target.value,
    });
    console.log(event.target.value);
  };

  handleButton = (event) => {
    console.log(event);
    if (event.target.value === "=") {
      this.handleCalc();
    } else if (this.state.input === "+") {
      this.setState({
        operation: "+",
        result: this.state.result,
      });
    }
    console.log(this.state.result);
  };

  handleCalc = (event) => {
    if (event === "+") {
      this.setState({
        result: event.target.value + event.target.value,
      });
    }
    // const array = [x, y];
    // console.log(array);
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <Display input={this.state.input} />

          <div className="row">
            <button value="7" onClick={this.addUserInput}>
              7
            </button>

            <button value="8" onClick={this.addUserInput}>
              8
            </button>

            <button value="9" onClick={this.addUserInput}>
              9
            </button>

            <button value="/" onClick={this.addUserInput}>
              /
            </button>
          </div>
          <div className="row">
            <button value="4" onClick={this.addUserInput}>
              4
            </button>
            <button value="5" onClick={this.addUserInput}>
              5
            </button>
            <button value="6" onClick={this.addUserInput}>
              6
            </button>
            <button value="*" onClick={this.addUserInput}>
              *
            </button>
          </div>
          <div className="row">
            <button value="1" onClick={this.addUserInput}>
              1
            </button>
            <button value="2" onClick={this.addUserInput}>
              2
            </button>
            <button value="3" onClick={this.addUserInput}>
              3
            </button>
            <button value="+" onClick={this.addUserInput}>
              +
            </button>
          </div>
          <div className="row">
            <button value="," onClick={this.addUserInput}>
              ,
            </button>
            <button value="0" onClick={this.addUserInput}>
              0
            </button>
            <button value="=" onClick={this.handleButton}>
              =
            </button>
            <button value="-" onClick={this.addUserInput}>
              -
            </button>
          </div>
          <div className="row">
            <button value="AC" onClick={() => this.setState({ input: "" })}>
              {" "}
              AC
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
