import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Comment({ recipeId, onClick , onAddComment }) {
    const [comments, setComments] = useState(null);

    useEffect(() => {
    fetch(`http://localhost:9292/recipes/${recipeId}/comments`)
        .then((response) => response.json())
        .then((comments) => {
        setComments(comments);
        }
    )
    }, [recipeId, onAddComment])

    const renderComments = () => {
    if (!comments) {
        return <p>Loading comments...</p>;
    }

    if (comments.length === 0) {
        return <p>There are no comments for this recipe.</p>;
    }

    return comments.map((comment) => {
        return (
            <div className='commentbox'>
                <Link style={{color: 'white'}} to={{ pathname: '/user/', search: `${comment.user.username}` }} onClick={() => { onClick(comment.user.username); }}>
                    <div className="link-style">
                        <img src={comment.user.image} className='recProfImage' />
                        {comment.user.username}</div>
                </Link>
                <li>{comment.comment}</li>
            </div>
        );
    });
    }

    return (
        <div>
            {renderComments()}
        </div>
    );
}

export default Comment;