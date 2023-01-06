// ***** ORIGINAL CODE *****
// import React, { useEffect, useState } from 'react'
// import {useLocation} from "react-router-dom"
// import './RecipePage.css'
// import './RecipePageCard.css'


// const RecipePageCard = () => {
//     const [recipe, setRecipe] = useState(null);
//     const location = useLocation()
//     const id = new URLSearchParams(location.search).get('id')
  
//     useEffect(() => {
//       fetch(`http://localhost:9292/recipes/${id}`)
//         .then((response) => response.json())
//         .then((recipe) => {
//         console.log(recipe)
//         setRecipe(recipe)}
//         )
//     }, [id])
  

//   return (
//      <div className='wholeDivContainer'>
//       {recipe && 
//       <div className="aboutHeader">
//       <h1 className="typewriters">{recipe.name}</h1>
//       <h3 className="infoText2">Created By: {recipe.user.username}</h3>
//       <h3 className="infoText2">Ingredients: {recipe.ingredients}</h3>
//       <h3 className="infoText2">Instructions: {recipe.instructions}</h3>
//       <h4 className="infoText2">Cooktime: {recipe.cooktime} minutes</h4>
//       <h5 className="infoText2">Spicy: {recipe.spicy? 'Yes' : 'No'}</h5>
//       <h5 className="infoText2">Vegan: {recipe.Vegan? 'Yes' : 'Hell No'}</h5>
//       <h5 className="infoText2">{recipe.contains_thc? 'Contains a lot of THC' : 'No THC found :('}</h5>
//       </div>}
//     </div>
//   );
// }

// export default RecipePageCard
// ***** ORIGINAL CODE *****


// ***** TEST CODE, IS WORKING *****
import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
import './HeartEffects.scss'
import './FlipCard.scss'
import Comment from './Comment';


const RecipePageCard = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [recipe, setRecipe] = useState(null);
  const location = useLocation()
  const id = new URLSearchParams(location.search).get('id')



  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${id}`)
      .then((response) => response.json())
      .then((recipe) => {
        setRecipe(recipe);
        setLikes(recipe.likes);
      }
    );
  
    fetch(`http://localhost:9292/recipes/${id}/likes`)
      .then((response) => response.json())
      .then((recipe) => {
        setLikes(recipe.likes);
      }
    );
  }, [id]);
  

 


  const handleLikeClick = () => {
    // Determine whether to increment or decrement the likes value
    const newLikes = clicked ? likes - 1 : likes + 1;
  
    // Make a PATCH request to update the likes for the recipe
    fetch(`http://localhost:9292/recipes/${id}/likes`, {
      method: 'PATCH',
      body: JSON.stringify({ id:id, likes: newLikes }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(recipe => {
      // Update the likes state variable with the value returned by the server
      setLikes(recipe.likes);
    });
  
    // Update the clicked state variable
    setClicked(!clicked);
  };


  return (
    <div className='container'>
        <div className='card'>
            {recipe &&
            <div>
            <div className="card__image-container">
                <img className="card__image" src={recipe.image} alt={recipe.name} />
        <svg className="card__svg" viewBox="0 0 800 800">
          <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
          <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
        </svg>
        
        <div className="card__content">
          <h1 className="card__title">{recipe.name}</h1>
          <h2>Ingredients: {recipe.ingredients}</h2>
          <h2>Cooktime: {recipe.cooktime} minutes</h2>
          <h2>Instructions: {recipe.instructions}</h2>
          <h2>{recipe.spicy? 'Spicy' : 'Not Spicy' }</h2>
          <h2>{recipe.Vegan? 'Vegan' : 'Not Vegan' }</h2>
          <h2>{recipe.contains_thc? 'Contains a lot of THC' : 'No trace of THC found' }</h2>
          <input id="toggle-heart" type="checkbox" />
          <label htmlFor="toggle-heart" aria-label="like" onClick={handleLikeClick} className={clicked ? "grey" : ""}>❤ {likes}</label>
        </div>
      </div>
    <div>
      Comments:
      <Comment recipeId={recipe.id} onClick={onClick} />
    </div>
      </div>
      }
    </div>
    </div>
  );
}

export default RecipePageCard



