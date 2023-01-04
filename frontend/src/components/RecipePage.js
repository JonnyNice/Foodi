import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null)
  const location = useLocation()
  const id = new URLSearchParams(location.search).get("id")

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${id}`)
      .then((response) => response.json())
      .then((recipe) => {
      console.log(recipe)
      setRecipe(recipe)}
      )
  }, [id])

  return (
    <div className="recipe_container">
      {recipe &&
        <div>
          <h2>
            {recipe.name}
          </h2>
          <li>{recipe.ingredients}</li>
        </div>
        }
    </div>
  )
}

export default RecipePage