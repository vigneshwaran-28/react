import React, { useState } from "react";

function UseStateHook() {
  let [count, setCount, aVal, setA] = [...useState(0), ...useState(1)];
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        clicked {count} times
      </button>
      <button
        onClick={() => {
          setA(aVal + 1);
        }}
      >
        clicked {aVal} times
      </button>
    </>
  );
}

export default UseStateHook;
