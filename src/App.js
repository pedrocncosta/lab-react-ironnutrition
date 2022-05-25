import React, { useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {
  const [foodsList, setfoodsList] = useState(foods);

  return (
    <div className="App">
      {foodsList.map((elem) => {
        return <FoodBox food={elem}/>;
      })}
    </div>
  );
}

export default App;
