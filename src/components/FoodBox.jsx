import React from 'react';

function FoodBox(props) {
  const { food, clickToDelete } = props;


  return (
    <div>
      <h2>{food.name}</h2>
      <img src={food.image} height={60} alt="foodImg" />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>Total Calories: {food.calories * food.servings}</p>
      <button onClick={() => clickToDelete(food.name)}>Delete</button>
    </div>
  );
}

export default FoodBox;
