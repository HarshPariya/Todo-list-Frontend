import React from 'react'
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const[count,setCount] = useState(0)
  return (
    <>
        <Header val={count}/>
        <button onClick={() => setCount(count+1)}>Increment</button> 
        <button onClick={() => setCount(count-1)}>Decrement</button>  
    </>
  )
}

export default App;
