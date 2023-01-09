import DashRecipeCard from "./DashRecipeCard";
import { useState, useEffect } from "react"

function DashRecipeList({ recipes, deleteRecipe }) {

    if (!recipes) {
        return null;
      }

    return(
        <div>{recipes.map(recipe => {
            return <DashRecipeCard recipe={recipe} key={recipe.id} deleteRecipe={deleteRecipe} />
    })}</div>
    )
}

export default DashRecipeList;