import HomeRecipeCard from "./HomeRecipeCard";
import { useState, useEffect } from "react"

function RecipeList() {
    
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes));
  }, []);
  
    return(
        <div>
            {recipes.map((recipe, index) => {
            if (index >= 3) {
                return;
                }
            return <HomeRecipeCard recipe={recipe} key={recipe.id} />
            })}
        </div>
    )
}

export default RecipeList;