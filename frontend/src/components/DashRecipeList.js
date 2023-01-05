import DashRecipeCard from "./DashRecipeCard";
import { useState, useEffect } from "react"

function DashRecipeList({ user, updateRecipes }) {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
    if (!user) {
        fetch("http://localhost:9292/recipes")
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    } else {
        fetch(`http://localhost:9292/recipes?username=${user.username}`)
        .then((r) => r.json())
        .then((recipes) => setRecipes(recipes));
    }
    }, [user]);

    return(
        <div>{recipes.map(recipe => {
            return <DashRecipeCard recipe={recipe} key={recipe.id} updateRecipes={updateRecipes} />
    })}</div>
    )
}

export default DashRecipeList;