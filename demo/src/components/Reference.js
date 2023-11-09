import React,{Component} from "react";

class UsingRef extends Component{
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    this.inputRef.current.focus()
  }
  
  render() {
    return (
      <>
        <label>Name</label>
        <input type="text" ref={this.inputRef} />
        <label>Age</label>
        <input type="text" />
      </>
    );
  }
}

export default UsingRef;