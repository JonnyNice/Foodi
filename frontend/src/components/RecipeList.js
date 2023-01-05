import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'

function RecipeList({ user }) {

  const [recipes, setRecipes] = useState([])


   useEffect(() => {
    if (!user) {
      fetch("http://localhost:9292/recipes")
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    } else {
      fetch(`http://localhost:9292/recipes?username=${user.username}`)
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    }
  }, [user]);

  // const addRecipe = (recipe) => {
  //   setRecipes([...recipes, recipe]);
  // };

  return(
    <div>{recipes.map(recipe => {
      return <RecipeCard recipe={recipe} key={recipe.id} />
    })}</div>
  )
}

export default RecipeList;