import { useState } from 'react';
import 'bulma/css/bulma.css';

import foodsSrc from '../foods.json';

import Foodbox from './Foodbox';
import Form from './Form';

function App() {
  const [foods, setFoods] = useState(foodsSrc);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      <h1 class="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          class="input search-bar"
          name="search"
          placeholder="Search"
          value=""
        />
      </div>
      <div className="column">
        <button
          onClick={() => setShowForm(!showForm)}
          className="button is-link"
        >
          Add Food
        </button>
        {showForm ? <Form foods={foods} setFoods={setFoods} /> : null}
      </div>

      <div className="columns">
        <div className="column">
          {foods.map((currentFoodObj) => (
            <Foodbox
              key={currentFoodObj.name}
              name={currentFoodObj.name}
              calories={currentFoodObj.calories}
              image={currentFoodObj.image}
              quantity={currentFoodObj.quantity}
            />
          ))}
        </div>
        <div className="column content"></div>
      </div>
    </div>
  );
}

export default App;
