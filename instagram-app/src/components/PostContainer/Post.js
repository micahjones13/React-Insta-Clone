import React from 'react';

const Post = props => {
    return (
        <div className = 'post'>
            <img src = {props.item.imageUrl} alt = ''></img>
            <p><img src = '' alt = 'heart'></img>  <img src = ' ' alt = 'comment'></img></p>
            
            <p>{props.item.likes} likes</p>
        </div>
    )
}

export default Post;


//need to add the images for heart and comment