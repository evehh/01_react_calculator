import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="col-xs-3 col-sm-3">
        <button
          onClick={() => this.props.onClick(this.props.name)}
          style={{
            width: "100%",
            height: "40px",
            fontSize: "24px",
            border: "1px solid",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: this.props.color
          }}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
