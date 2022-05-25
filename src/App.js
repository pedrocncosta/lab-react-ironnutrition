import React, { useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Searchbar';

function App() {
  const [foodsList, setfoodsList] = useState(foods);
  const [searchFood, setSearchFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [newFood, ...foodsList];
    setfoodsList(updatedFood);
  };

  const searchFilter = (search) => {
    let filteredFood = foodsList.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFood(filteredFood);
  };

  const deleteFood = (foodName) => {
    const filteredFood = foodsList.filter((food) => {
      return food.name !== foodName;
    });

    setfoodsList(filteredFood);

    setSearchFood(filteredFood);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <Searchbar searchFilter={searchFilter} />
      {searchFood.map((elem) => {
        return <FoodBox food={elem} clickToDelete={deleteFood} />;
      })}
    </div>
  );
}

export default App;
