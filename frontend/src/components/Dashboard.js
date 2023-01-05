import React from 'react'
import { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import CreateRecipeForm from './RecipeForm'

function Dashboard(props) {
  const { username } = props;

  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/dashboard/${username}`)
      .then((r) => r.json())
      .then((user) => {
        console.log(user)
        setUser(user)
        setRecipes(user.recipes)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username, recipes]);


//   const addRecipe = (recipe) => {
//     setRecipesState([...recipes, recipe]);
//   };


  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        <h1>{user.username}</h1>
        <h3>About: {user.email}</h3>
      </div>
      {/* <img src={user.image} alt={user.name} /> */}
      <h2>Recipes:</h2>
      <RecipeList recipes={recipes} />
      <CreateRecipeForm username={username} setRecipes={setRecipes} />
    </div>
  );
}
export default Dashboard;