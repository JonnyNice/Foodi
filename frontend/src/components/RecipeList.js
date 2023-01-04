import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react"
// import { useHistory } from 'react-router-dom';

function RecipeList() {
    
  // const history = useHistory();
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  // const handleClick = (recipeId) => {
  //   history.push(`/recipes/${recipeId}`);
  // }


    return(
        <div>{recipes.map(recipe => {
            return <RecipeCard recipe={recipe} key={recipe.id} />
        })}</div>
    )
}

export default RecipeList;