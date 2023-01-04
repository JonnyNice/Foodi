import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'

function RecipeList(props) {
  const [recipes, setRecipes] = useState([])
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username') || 'all';
  const { user } = props

  useEffect(() => {
    if (props.username === 'all') {
      fetch('http://localhost:9292/recipes')
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    } else {
      fetch(`http://localhost:9292/recipes?username=${user}`)
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