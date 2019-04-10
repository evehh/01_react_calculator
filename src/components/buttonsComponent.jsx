import React, { Component } from "react";
import Button from "./buttonComponent";
class Buttons extends Component {
  panel = [
    { name: "7", color: "lightgray" },
    { name: "8", color: "lightgray" },
    { name: "9", color: "lightgray" },
    { name: "÷", color: "lightblue" },
    { name: "4", color: "lightgray" },
    { name: "5", color: "lightgray" },
    { name: "6", color: "lightgray" },
    { name: "×", color: "lightblue" },
    { name: "1", color: "lightgray" },
    { name: "2", color: "lightgray" },
    { name: "3", color: "lightgray" },
    { name: "-", color: "lightblue" },
    { name: "0", color: "lightgray" },
    { name: "=", color: "orange" },
    { name: "Borrar", color: "red" },
    { name: "+", color: "lightblue" }
  ];

  render() {
    return (
      <div className={"row col-6 offset-3"}>
        {this.panel.map(singleElement => (
          <Button
            key={singleElement.name}
            name={singleElement.name}
            onClick={() => this.props.onClick(singleElement.name)}
            color={singleElement.color}
          />
        ))}
      </div>
    );
  }
}

export default Buttons;
