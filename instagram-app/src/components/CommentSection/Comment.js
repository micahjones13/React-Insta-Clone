import React from 'react';

const Comment = (props) => {
    return(
        <div className = 'comment'>
        <p><span className = 'username'>{props.item.username}</span> {props.item.text}</p>
        
        
        </div>
    );
}

export default Comment;

//<p>{props.comments.username}</p>

//{props.commentArr.username}