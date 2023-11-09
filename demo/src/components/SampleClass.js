import React, { Component } from "react";
import "../App.css";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: "sankar",
      age: 23,
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    console.log("before");
    this.setState({
      name: "vignesh",
    });
    console.log("after");
  }
  render() {
    return (
      <div>
        <h1> my name is {this.state.name}</h1>
        <button className="bt-1" onClick={this.changeName}>
          click me
        </button>
      </div>
    );
  }
}

export default Welcome;
