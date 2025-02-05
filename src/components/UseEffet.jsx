import React , { useState , useEffect } from 'react'

const UseEffect = () => {
const [count, setCount] = useState(0); 

const increment = () => {
    setCount(count + 1); 
};

const decrement = () => {
    setCount(count - 1);
};

useEffect(function printSomething() {
      console.log("This is side effect");
  }, [count]); 

   return (
    <div>
      <h3>Count: {count}</h3>
      <button  onClick={increment}>Increment</button>
      <button  onClick={decrement}>Decrement</button>
      {/* <p>You clicked {count} times</p> */}
    </div>
  );
};

export default UseEffect;