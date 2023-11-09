import React, { useReducer } from "react";

let initialState = 0;

function reducer(state, action) {
  switch (action) {
    case "incree":
      return state + 1;
    case "decree":
      return state - 1;
    case "reset":
        return initialState
  }
}

function UseReducer() {
  let [count,despatch]=useReducer(reducer, initialState);
  return (
    <>
      <div>count-{count}</div>
      <div>
        <button onClick={() => despatch("incree")}>Increement</button>
        <button onClick={() => despatch("decree")}>Decreement</button>
        <button onClick={() => despatch("reset")}>Reset</button>
      </div>
    </>
  );
}

export default UseReducer;
