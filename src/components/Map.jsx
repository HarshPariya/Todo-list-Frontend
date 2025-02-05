const fruits = ["Apple", "Banana", "Cherry", "Date"];

function Map() {
  return (
    //! Without key Index
    <ul>
         {
            fruits.map((val)=>{
                return <li> {val} </li>
            })
         }
    </ul>
    
    //! With Key Index
    // <ul>
    //   {fruits.map((fruit, index) => (
    //     <li key={index}>{fruit}</li>
    //   ))}
    // </ul>
  );
}

export default Map;


//! Props
// const users = [
//     { id: 1, name: "John Doe", age: 28 },
//     { id: 2, name: "Jane Smith", age: 32 },
//     { id: 3, name: "Sam Johnson", age: 25 },
//   ];  

// function Map() {
//     return (
//         <div>
//           {users.map((user) => (
//             <div key={user.id}>
//               <h2>{user.id} . {user.name}</h2>
//               <p>Age: {user.age}</p>
//             </div>
//           ))}
//         </div>
//       );    
// }

// export default Map;