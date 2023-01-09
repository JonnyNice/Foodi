import { useState } from 'react'

function DashRecipeForm({ username, setRecipes }) {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [message, setMessage] = useState('');
    const [formVisible, setFormVisible] = useState(false);

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
            fetch(`http://localhost:9292/recipes?username=${username}`)
            .then((r) => r.json())
            .then((recipes) => {
                setRecipes([...recipes, { name, ingredients, instructions }]);
            });
        } else {
            setMessage('Error creating recipe');
        }
        });
    };

    const handleUpdateUser = async () => {
        setFormVisible(false);
    }

    return (
        <div>
            <button onClick={() => setFormVisible(!formVisible)}>
                {formVisible ? 'Cancel' : 'Add New Recipe!'}
            </button>
            {formVisible && (
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
                )}
            </div>
        );
    }

export default DashRecipeForm;
