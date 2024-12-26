import React from 'react';

function FoodList() {
  const foodItems = ["Pizza", "Burger", "Pasta", "Bread"];

  return (
    <div>
          
          <button onClick={foodItems}>foodItems</button>
    </div>
  );
}

export default FoodList;

