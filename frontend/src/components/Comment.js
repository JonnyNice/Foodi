import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Comment({ recipeId, onClick }) {
    const [comments, setComments] = useState(null);

    useEffect(() => {
    fetch(`http://localhost:9292/comments/${recipeId}`)
        .then((response) => response.json())
        .then((comments) => {
        setComments(comments);
        }
    )
    }, [recipeId])

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
                <Link to={{ pathname: '/user/', search: `${comment.username}` }} onClick={() => { onClick(comment.username); }}>
                    <div className="link-style">
                        <img src={comment.image} className='recProfImage' />
                        {comment.username}</div>
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