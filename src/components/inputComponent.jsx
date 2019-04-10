import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className={"row col-6 offset-3"}>
        <div
          className={"col-12"}
          style={{
            height: "50px",
            backgroundColor: "gray",
            color: "white",
            verticalAlign: "middle",
            textAlign: "right",
            verticalAlign: "text-top",
            fontSize: "40px",
            marginBottom: "10px",
            border: "1px solid black"
          }}
        >
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default Input;
