import React from 'react'
import { useState } from 'react';
import "./Calculator.css";
function Calculator() {

  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [result, setresult] = useState();

  const add = () => {
    setresult(parseInt(num1) + parseInt(num2));
  };
  const sub= () => {
    setresult(parseInt(num1) - parseInt(num2));
  };
  const multiply= () => {
    setresult(parseInt(num1) * parseInt(num2));
  };
  const div= () => {
    setresult(parseInt(num1) / parseInt(num2));
  };

  return (
    <div >
      <input type="text" value={num1} onChange={(e) => setnum1(e.target.value)} />
      <input type="text" value={num2} onChange={(e) => setnum2(e.target.value)} />
      <button onClick={add}>Addition</button>
      <button onClick={sub}>Substraction</button>
      <button onClick={multiply}>Multiplication</button>
      <button onClick={div}>Division</button>
      <h1>Result= {result}</h1>
    </div>
      )
}

export default Calculator