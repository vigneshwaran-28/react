import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/SampleClass";
import Counter from "./components/counter";
import Demo from "./components/demo";
import InputField from "./components/Input";
import UsingRef from "./components/Reference";
import UseStateHook from "./Hooks/UseStateHook";
import UserContextFile from "./Hooks/userContextFIle";
import React,{useReducer} from "react";
import UseReducer from "./Hooks/UseReducer";
import Afile from "./Hooks/A";

export const userContext = React.createContext();

let initialValue=0;

function reducer(stateValue,action){
  switch(action){
    case "incree":
      return stateValue+1;
    case "decree":
      return stateValue-1;
    case "reset":
      return initialValue;
  }
}


function App() {

const [curState,changeState]=useReducer(reducer,initialValue);
  return (
    <div className="App">
      {/* <Greet  /> */}
      {/* <Greet  /> */}
      {/* <Welcome /> */}
      {/* <Counter/> */}
      {/* <Demo/> */}
      {/* <InputField/> */}
      {/* <UsingRef/> */}
      {/* <UseStateHook/> */}
      {/* <userContext.Provider value={"vigneshwaran master"}>
        <UserContextFile />
      </userContext.Provider> */}
      {/* <UseReducer/> */}
      <userContext.Provider value={{curState,changeState}}>
        stateValue={curState}
        <Afile />
      </userContext.Provider>
    </div>
  );
}

export default App;
