import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counterValue: 0,
    };
    this.increaseCount=this.increaseCount.bind(this);
  }

  increaseCount(){
    this.setState({
        counterValue:this.state.counterValue+1
    })
  }

  render() {
    return (
      <div>
        counter {this.state.counterValue}
        <button onClick={this.increaseCount}>click me</button>
      </div>
    );
  }
}

export default Counter;
