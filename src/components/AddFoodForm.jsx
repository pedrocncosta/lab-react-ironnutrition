import React, { useState } from 'react';

function AddFoodForm(props) {
  const { addNewFood } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    addNewFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
    alert(`Added ${name}`);
  };

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.checked);

  return (
    <div>
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="image">Image</label>
        <input type="text" name="image" value={image} onChange={handleImage} />

        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />

        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServings}
        />

        <button type="submit">Create Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
