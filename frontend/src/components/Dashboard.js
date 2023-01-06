import React from 'react'
import { useState, useEffect } from 'react'
import DashRecipeList from './DashRecipeList'
import CreateRecipeForm from './DashRecipeForm'
import DashComment from './DashComment'
import DashUpdateForm from './DashUpdateForm'

function Dashboard(props) {
    const { username } = props;
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [image, setImage] = useState('');
    const [bio, setBio] = useState('');

    async function fetchComments() {
        if (user) {
            try {
            const response = await fetch(`http://localhost:9292/comments_with_recipes/${user.id}`);
            if (response.ok) {
                const commentsWithRecipes = await response.json();
                console.log(commentsWithRecipes);
                setComments(commentsWithRecipes);
            } else {
                setComments([]);
            }
            } catch (error) {
            console.error(error);
            }
        }
        }

        async function handleSubmit(event) {
            event.preventDefault()
            try {
            const response = await fetch(`http://localhost:9292/users/${user.id}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                image,
                bio
                })
            })
            if (response.ok) {
                // User was successfully updated
                const updatedUser = { ...user, image, bio }
                setUser(updatedUser)
            } else {
                // There was an error updating the user
            }
            } catch (error) {
            console.error(error)
        }
    }

    const handleUpdateUser = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:9292/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: event.target.image.value,
                bio: event.target.bio.value
            })
            });
            if (response.ok) {
            // User was successfully updated
            const updatedUser = await response.json();
            setUser(updatedUser);
            } else {
            // There was an error updating the user
            }
        } catch (error) {
            console.error(error);
        }
    }

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
    }, [username]);

    useEffect(() => {
        if (user) {
            fetchComments();
        }
    }, [user]);

    const updateRecipes = () => {
        fetch(`http://localhost:9292/recipes?username=${username}`)
        .then((r) => r.json())
        .then((recipes) => setRecipes(
    recipes));
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
            // Comment was successfully updated
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
            // There was an error updating the comment
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
                // There was an error deleting the comment
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
                <div>
                    <h1>{user.username}</h1>
                    <img src={user.image}/>
                    <h3>About: {user.email}</h3>
                </div>
                <DashUpdateForm handleUpdateUser={handleUpdateUser} />
                <div> 
                    <h2>Comments:</h2>
                    {comments.map((comment) => (
                            <DashComment
                                key={comment.id}
                                updateComment={updateComment}
                                comment={comment.comment}
                                id={comment.id}
                                name={comment.recipe_title}
                                deleteComment={deleteComment}
                            />
                    ))}
                </div>
                <h2>Recipes:</h2>
                    <DashRecipeList user={user} updateRecipes={updateRecipes}/>
                    <CreateRecipeForm username={username} setRecipes={setRecipes} />
            </div>
    );
}
export default Dashboard;