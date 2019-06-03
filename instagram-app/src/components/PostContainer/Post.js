import React from 'react';

const Post = props => {
    return (
        <div className = 'post'>
            <img src = {props.item.imageUrl} alt = ''></img>
            <p>{props.item.likes} likes</p>
        </div>
    )
}

export default Post;