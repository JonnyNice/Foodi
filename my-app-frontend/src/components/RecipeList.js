import RecipeCard from "./RecipeCard";

function RecipeList({recipes}) {
    return(
        <div>{recipes.map(recipe => {
            return <RecipeCard recipe={recipe} key={recipe.id} />
        })}</div>
    )
}

export default RecipeList;