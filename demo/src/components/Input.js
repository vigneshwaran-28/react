import React,{Component} from "react";

class InputField extends Component{
    constructor(){
        super();
        this.state={
            name:''
        }
        this.updateState=this.updateState.bind(this);
        this.showState = this.showState.bind(this);
    }

    updateState(event){
        this.setState({
            name:event.target.value
        });
    }

    showState(event){
        console.log('hello');
        alert(`after clicking submit button ${this.state.name}`);
    }

    render(){
         return (
        <form onSubmit={this.showState}>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={this.updateState}/>
            <button type="submit">
                click to submit</button>
        </form>
    );
    }
   
}

export default InputField;
