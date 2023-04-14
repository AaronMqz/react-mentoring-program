import React from "react";
import "./counter.css";

function Button(props) {
  return React.createElement(
    "div",
    { onClick: props.handleClick, className: "button-counter" },
    props.name
  );
}

class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return React.createElement(
      "div",
      { className: "counter-container" },
      React.createElement(
        Button,
        { handleClick: this.handleIncrement, name: "Increment" },
        null
      ),
      React.createElement(
        Button,
        { handleClick: this.handleDecrement, name: "Decrement" },
        null
      ),
      React.createElement(
        "label",
        { className: "label-counter" },
        this.state.count
      )
    );
  }
}

export default Counter;
