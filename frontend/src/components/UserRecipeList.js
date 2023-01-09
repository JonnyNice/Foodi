import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react"
import '../CSS/App.css'

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

  return(
    <div className="container4">
        <h1>All Recipes: </h1>
        <div className="container5">
        {recipes.map(recipe => {
        return <RecipeCard recipe={recipe} key={recipe.id} />
    })}</div>
    </div>
  )
}

export default RecipeList;