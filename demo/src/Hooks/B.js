import React from "react";
import { userContext } from "../App";
import UseContextUseReducer from "./UseContextUseReduce";

function FileB() {
  return (
    <>
      <div>
        {/* <userContext.Consumer>
          {(name) => {
            return <div> my name is {name} </div>;
          }}
        </userContext.Consumer> */}
        <UseContextUseReducer/>
      </div>
    </>
  );
}

export default FileB;
