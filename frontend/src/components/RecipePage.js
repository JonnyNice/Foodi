import RecipeList from "./RecipeList";

function RecipePage({ username }) {

    return(
        <div>
            <h1>All Recipes: </h1>
            <RecipeList username={username} />
        </div>
    )
}

export default RecipePage;