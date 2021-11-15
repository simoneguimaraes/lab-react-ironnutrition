import 'bulma/css/bulma.css';

import foods from '../foods.json';

import Foodbox from './Foodbox';

function App() {
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
