import '../App.css';
import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList"

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <RecipeList recipes={recipes}/>
      </header>
    </div>
  );
}

export default App;
