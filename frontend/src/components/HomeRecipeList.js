import HomeRecipeCard from "./HomeRecipeCard";
import { useState, useEffect } from "react"

function RecipeList() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const selectedRecipes = shuffle(recipes)

    return(
        <div>
            {selectedRecipes.map((recipe, index) => {
            if (index >= 3) {
                return;
                }
            return <HomeRecipeCard recipe={recipe} key={recipe.id} />
            })}
        </div>
    )
}

export default RecipeList;