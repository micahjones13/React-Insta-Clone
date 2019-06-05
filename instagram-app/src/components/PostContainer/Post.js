import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons'

const Post = props => {
    return (
        <div className = 'post'>
            <img src = {props.item.imageUrl} alt = ''></img>
            <p><FontAwesomeIcon icon = {faHeart} onClick = {props.incrementLikes} />    <FontAwesomeIcon icon = {faComment} /></p>
            <p>{props.item.likes} likes</p>
            
        </div>
    )
}

export default Post;


//need to add the images for heart and comment
//<p><img onClick = {props.incrementLikes} src = '' alt = 'heart'></img>  <img src = ' ' alt = 'comment'></img></p>