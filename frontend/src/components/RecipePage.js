// ***** ORIGINAL CODE *****
import React, { useEffect, useState } from 'react'
import RecipeCard from "./RecipeCard"
import {useLocation} from "react-router-dom"
import './RecipePage.css'

const RecipePage = () => {
    const [recipe, setRecipe] = useState(null);
    const location = useLocation()
    const id = new URLSearchParams(location.search).get('id')
  
    useEffect(() => {
      fetch(`http://localhost:9292/recipes/${id}`)
        .then((response) => response.json())
        .then((recipe) => {
        console.log(recipe)
        setRecipe(recipe)}
        )
    }, [id])
  

  return (
     <div className='wholeDivContainer'>
      {recipe && 
      <div className="aboutHeader">
      <h1 className="typewriters">{recipe.name}</h1>
      <h2 className="infoText2">Created By: {recipe.user.username}</h2>
      <h2 className="infoText2">Ingredients: {recipe.ingredients}</h2>
      <h3 className="infoText2">Instructions: {recipe.instructions}</h3>
      <h4 className="infoText2">Cooktime: {recipe.cooktime} minutes</h4>
      <h5 className="infoText2">Spicy: {recipe.spicy? 'Yes' : 'No'}</h5>
      <h5 className="infoText2">Vegan: {recipe.Vegan? 'Yes' : 'Hell No'}</h5>
      <h5 className="infoText2">Contains THC: {recipe.contains_thc? 'Hell Yes' : 'No :('}</h5>
      </div>}
    </div>
  );
}

export default RecipePage
// ***** ORIGINAL CODE *****




// ***** TEST CODE *****

// import React, { useEffect, useState } from 'react';
// import RecipeCard from "./RecipeCard";
// import { useParams } from 'react-router-dom';

// const RecipePage = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       const response = await fetch(`http://localhost:9292/recipes/${id}`);
//       const data = await response.json();
//       setRecipe(data);
//     }
//     fetchRecipe();
//   }, [id]);

//   return (
//      <div className="recipe_container">
//       {recipe ? <RecipeCard recipe={recipe} /> : 'Loading...'}
//     </div>
//   );
// }

// export default RecipePage;