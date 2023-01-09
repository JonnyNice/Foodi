import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import './CSS/HeartEffects.scss';
import './CSS/FlipCard.scss';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Comment from './Comment';

const RecipePageCard = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [recipe, setRecipe] = useState(null);
  const location = useLocation()
  const id = new URLSearchParams(location.search).get('id')
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('')
  const [comments, setComments] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${id}`)
      .then((response) => response.json())
      .then((recipe) => {
        setRecipe(recipe);
        setLikes(recipe.likes);
      }
    );

    fetch(`http://localhost:9292/recipes/${id}/likes`)
      .then((response) => response.json())
      .then((recipe) => {
        setLikes(recipe.likes);
      }
    );
  }, [id]);

  const handleLikeClick = () => {
    const newLikes = clicked ? likes - 1 : likes + 1;
    fetch(`http://localhost:9292/recipes/${id}/likes`, {
      method: 'PATCH',
      body: JSON.stringify({ id:id, likes: newLikes }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(recipe => {
      setLikes(recipe.likes);
    });
    setClicked(!clicked);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    fetch(`http://localhost:9292/users?username=${username}`)
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(user => user.username === username);
        if (user) {
          const user_id = user.id;
          fetch('http://localhost:9292/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              comment,
              user_id,
              recipe_id: id
            }),
          })
            .then((response) => {
              if (response.ok) {
                const newComment = {
                  comment,
                  user_id,
                  recipe_id: id
                };
                addComment(newComment);
                setComment('');
                setUsername('');
                setErrorMessage('');
              }
            });
        }
        else {
          setErrorMessage('Username not found');
          return;
        }
      });
  };

  return (
    <div>
    <div className='container'>
        <div className='card'>
            {recipe &&
            <div>
            <div className="card__image-container">
                <img className="card__image" src={recipe.image} alt={recipe.name} />
        <svg className="card__svg" viewBox="0 0 800 800">
          <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
          <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
        </svg>
        <div className="card__content">
          <h1 className="card__title">{recipe.name}</h1>
          <h2>Created by: {recipe.user.username}</h2>
          <h2>Ingredients: {recipe.ingredients}</h2>
          <h2>Cooktime: {recipe.cooktime} minutes</h2>
          <h2>Instructions: {recipe.instructions}</h2>
          <h2>{recipe.spicy? 'Spicy' : 'Not Spicy' }</h2>
          <h2>{recipe.Vegan? 'Vegan' : 'Not Vegan' }</h2>
          <h2>{recipe.contains_thc? 'Contains a lot of THC' : 'No trace of THC found' }</h2>
          <input id="toggle-heart" type="checkbox" />
          <label htmlFor="toggle-heart" aria-label="like" onClick={handleLikeClick} className={clicked ? "grey" : ""}>❤ {recipe.rating}</label>
        </div>
      </div>
    <div>
      Comments:
      <Comment recipeId={recipe.id} onClick={onClick} onAddComment={addComment} />
    </div>
      </div>
      }
    </div>
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
      <div>
        <form onSubmit={(event) => handleSubmit(event, id)}>
        {errorMessage ? <p>{errorMessage}</p> : null}
            <label htmlFor="comment-input">Comment:</label>
            <input
              id="comment-input"
              type="text"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <label htmlFor="username-input">Username:</label>
            <input
              id="username-input"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  );
}

export default RecipePageCard



