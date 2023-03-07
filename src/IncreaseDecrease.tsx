import React, { useState } from "react";

export default function IncreaseDecrease() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    //setCount(count - 1);
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        debugger;
        return (prevCount = 0);
      }
    });
    //setCount(count > 0 ? count - 1 : 0);
  }
  return (
    //   <div className="App">
    //     <h1>Welcome to React...!</h1>
    //     <p>You clicked {count} times</p>
    //     <button
    //       onClick={() => {
    //         console.log(count);
    //         setCount(count + 1);
    //       }}
    //     >
    //       Increase
    //     </button>

    //     <button
    //       onClick={() => {
    //         console.log(count);
    //         if (count > 0) setCount(count - 1);
    //         else {
    //           setCount(0);
    //           console.log("The value is {count} , please click increase button");
    //         }
    //       }}
    //     >
    //       Decrease
    //     </button>
    //     {count === 0 && (
    //       <p>The value is {count} , please click increase button</p>
    //     )}
    //   </div>

    <div className="IncreaseDecrease">
      <h3>Welcome to React...!</h3>
      <p>You clicked {count} times</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      {count === 0 && (
        <p>The value is {count} , please click increase button</p>
      )}
    </div>
  );
}
