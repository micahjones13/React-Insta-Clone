import React from 'react';

const Comment = (props) => {
    return(
        <div className = 'comment'>
        <p>{props.item.username} {props.item.text}</p>
        
        
        </div>
    );
}

export default Comment;

//<p>{props.comments.username}</p>

//{props.commentArr.username}