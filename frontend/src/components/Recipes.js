import React from 'react'
import RecipeList from "./RecipeList"

const Recipes = ({username}) => {

  return (
    <RecipeList username={username}/>
  )
}

export default Recipes