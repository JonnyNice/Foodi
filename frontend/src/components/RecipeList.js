import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'

function RecipeList() {

  const [recipes, setRecipes] = useState([])
  const searchParams = new URLSearchParams(useLocation().search);
  const username = searchParams.get('username') || 'all';

  useEffect(() => {
    if (username === 'all') {
      fetch('http://localhost:9292/recipes')
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    } else {
      const searchParams = new URLSearchParams();
      searchParams.set('username', username);
      fetch(`http://localhost:9292/recipes?${searchParams}`)
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    }
  }, [username]);

    return(
        <div>{recipes.map(recipe => {
            return <RecipeCard recipe={recipe} key={recipe.id} />
        })}</div>
    )
}

export default RecipeList;