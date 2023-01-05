import { useState } from 'react'

function CreateRecipeForm({ username, setRecipes }) {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:9292/recipes', {
        method: 'POST',
        body: JSON.stringify({
            username,
            name,
            ingredients,
            instructions,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        }).then((response) => {
        if (response.ok) {
            setName('');
            setIngredients('');
            setInstructions('');
            setMessage('Recipe created successfully');
            // Add the new recipe to the list of recipes in the state
            fetch(`http://localhost:9292/recipes?username=${username}`)
            .then((r) => r.json())
            .then((recipes) => {
                // Add the new recipe to the list of recipes
                setRecipes([...recipes, { name, ingredients, instructions }]);
            });
        } else {
            setMessage('Error creating recipe');
        }
        });
    };

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
        Recipe Name:
        <input
            type="text"
            id="name"
            value={name}
            onChange={(event)=> setName(event.target.value)}
            />
            </label>
                <br />
            <label htmlFor="ingredients">
                Ingredients:
            <input
                type="text"
                id="ingredients"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
            />
            </label>
                <br />
            <label htmlFor="instructions">
                Instructions:
            <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
            />
            </label>
                <br />
            <button type="submit">Create Recipe</button>
                {message && <p>{message}</p>}
            </form>
        );
    }

export default CreateRecipeForm;
