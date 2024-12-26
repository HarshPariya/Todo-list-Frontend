import React, { useState } from "react";


function Counter() {
  let [count, setCount] = useState(1);
  const increment = () => {
    if (count < 10) {
      document.body.style.backgroundColor = "pink";
      setCount(count + 1);
    }
    // eslint-disable-next-line
    else if ((count = 11)) {
      setCount(0);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    document.body.style.backgroundColor = "lavender";
  };

  const colorChanger = () => {
    document.getElementById("count").style.color = "brown";
  };

  return (
    <>
      <h1 id="count">Count: {count} </h1>
      <button className="inc" onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={colorChanger}>color</button>
    </>
  );
}

export default Counter;
