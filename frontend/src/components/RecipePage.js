// ***** ORIGINAL CODE *****
import React, { useEffect, useState } from 'react'
import RecipeCard from "./RecipeCard"

const RecipePage = () => {
    const [recipe, setRecipe] = useState(null);
  
  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     const response = await fetch("http://localhost:9292/recipes");
  //     const data = await response.json();
  //     setRecipe(data);
  //   }
  //   fetchRecipe();
  // }, []);

  return (
     <div className="recipe_container">
      {recipe ? <RecipeCard recipe={recipe} /> : 'Loading...'}
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