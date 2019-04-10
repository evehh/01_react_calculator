import React, { Component } from "react";
import Input from "./inputComponent";

import Buttons from "./buttonsComponent";
import calculate from "../logic/calculate.js";

class Calculator extends Component {
  state = {
    value: 0,
    operation: ""
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hola GitHub! Estoy aprendiendo React.js</h1>
        <h4>Proyecto: 01_react_calculator</h4>
        <h5>Operación: {this.state.operation}</h5>
        <Input value={this.state.value} />
        <Buttons onClick={this.handleClick} />
      </React.Fragment>
    );
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
}

export default Calculator;
