import React from 'react'
import { useState, useEffect } from 'react'
import DashRecipeList from './DashComponents/DashRecipeList'
import CreateRecipeForm from './DashComponents/DashRecipeForm'
import DashComment from './DashComponents/DashComment'
import DashUpdateForm from './DashComponents/DashUpdateForm'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'

function Dashboard(props) {
    const { username, onClick } = props;
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState(null);
    const [recipes, setRecipes] = useState([]);
    // const [image, setImage] = useState('');
    // const [bio, setBio] = useState('');

    useEffect(() => {
        fetch(`http://localhost:9292/dashboard/${username}`)
        .then((r) => r.json())
        .then((user) => {
            console.log(user)
            setUser(user)
            setRecipes(user.recipes)
            fetchComments();
            })
        .catch((error) => {
            console.log(error);
        });
    }, [username]);

    async function fetchComments(username) {
        try {
            const response = await fetch(`http://localhost:9292/comments?username=${username}`);
            const comments = await response.json();
            setComments(comments);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (user) {
            fetchComments(user.username);
        }
    }, [user]);

    const deleteRecipe = async (id) => {
        try {
            const response = await fetch(`http://localhost:9292/recipes/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            // Update the recipes state variable to remove the deleted recipe
            const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
            setRecipes(updatedRecipes);
            } else {
            }
        } catch (error) {
            console.error(error);
        }
    }

    const updateRecipes = () => {
        fetch(`http://localhost:9292/recipes?username=${username}`)
        .then((r) => r.json())
        .then((recipes) => setRecipes(
    recipes));
    };

    const handleSubmit = async (image, bio) => {
        try {
        const response = await fetch(`http://localhost:9292/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image,
                bio,
            }),
          });
          if (response.ok) {
            const updatedUserResponse = await fetch(`http://localhost:9292/users/${user.id}`);
            const updatedUserJson = await updatedUserResponse.json();
            setUser(updatedUserJson);
          }
        } catch (error) {
          console.error(error);
        }
      };


    async function updateComment(id, newComment) {
        try {
            const response = await fetch(`http://localhost:9292/comments/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: newComment
            })
        });
        if (response.ok) {
            const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                return {
                    ...comment,
                    comment: newComment
                };
                }
                return comment;
            });
            setComments(updatedComments);
            } else {
            }
        } catch (error) {
            console.error(error);
        }
        }

    async function deleteComment(id) {
        try {
            const response = await fetch(`http://localhost:9292/comments/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setComments(comments.filter(comment => comment.id !== id));
            } else {
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (!user) {
        return <div>Loading...</div>;
    }
        return (
            <div>
                <div className="dash__content" >
                    <h1>{user.username}</h1>
                    <img src={user.image}/>
                    <h3>About: {user.bio}</h3>
                    <DashUpdateForm handleSubmit={handleSubmit} />
                </div >
                <div className='spacer2'>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                </div>
                <div className="dash__content" >
                    <h2>Comments:</h2>
                    {comments && comments.map((comment) => comment.recipe && (
                            <DashComment
                                key={comment.id}
                                updateComment={updateComment}
                                comment={comment.comment}
                                id={comment.id}
                                name={comment.recipe.name}
                                deleteComment={deleteComment}
                                onClick={onClick}
                            />
                    ))}
                </div>
                <div className='spacer2'>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                    <RestaurantMenuIcon fontSize='small'/>
                </div>
                <div className="dash__content">
                    <h2>Recipes:</h2>
                    <DashRecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
                    <CreateRecipeForm username={username} setRecipes={setRecipes} updateRecipes={updateRecipes} />
                </div>
            </div>
    );
}
export default Dashboard;