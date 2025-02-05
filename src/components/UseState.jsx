import React , { useState } from 'react'

//! M-1
const Usestate = () => {
const [count, setCount] = useState(0); 

const increment = () => {
    setCount(count + 1); 
};

const decrement = () => {
    setCount(count - 1);
};

   return (
    <div>
      <h3>Count: {count}</h3>
      <button  onClick={increment}>Increment</button>
      <button  onClick={decrement}>Decrement</button>
      {/* <p>You clicked {count} times</p> */}
    </div>
  );
};


//! M-2 
// function Usestate() {
//     let [count, setCount] = useState(0);
//       console.log("Component is rendered!");
//       console.log(count = ${count});

//     let increment = () => {
//         setCount(count + 1);
//         console.log(inside increment , count = ${count});  // Console Message 
//     };
//     let decrement = () => {
//         setCount(count - 1);
//         console.log(inside decrement , count = ${count});  // Console Message 
//     };

//   return (
//     <div>
//       <h3>Count: {count}</h3>
    //   <button  onClick={increment}>Increment</button>
    //   <button  onClick={decrement}>Decrement</button>
//     </div>
//   );

// const [count, setCount ] = useState(1);


export default Usestate;


// import { useState } from "react";

// const Usestate = () => {
//     const increment = () => {
//         setCount(count + 1);
//         // if(count == 10) {
//         //     setCount(0); 
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = #${randomColor.padStart()}
//         // document.getElementById('count').style.color = "white"
//     // }
//     };
    
//     const decrement = () => {
//         //if(count >= -10) {
//         setCount(count - 1);
//         // if(count == -10) {
//         //     setCount(0); 
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = #${randomColor.padStart()}
//         // }
//     };

//     const colorChanger = () => {
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = #${randomColor.padStart()}
//         // document.body.style.backgroundColor = "blue"
//     }
    
//     const colorRemove = () => {
//         document.body.style.backgroundColor = "White"
//     }
//     return (
//     <>
//     <h1 id = "count">Count: {count}</h1>
//     <button className= "inc" onClick={increment}>Increment</button>
//     <button className= "dec" onClick={decrement}>Decrement</button>
//     <button className= "cha" onClick={colorChanger}>Color</button>
//     <button className= "rem" onClick={colorRemove}>Remove</button>
//     </>
//     );
    
// }
//   export default Usestate;