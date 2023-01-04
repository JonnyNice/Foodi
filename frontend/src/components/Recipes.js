import React from 'react'
import RecipeList from "./RecipeList"

const Recipes = ({creatorName}) => {

  return (
    <RecipeList creatorName={creatorName}/>
  )
}

export default Recipes