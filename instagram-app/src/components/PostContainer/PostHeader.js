import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
    return(
        <div className = 'post-header'>
            <img src = {props.item.thumbnailUrl} alt = ''></img>
             <p>{props.item.username}</p>
                <img src = {props.item.imageUrl} alt = ''></img>
            <p>{props.item.likes} likes</p>
        </div>
    )
}

PostHeader.propTypes = {
    item: PropTypes.shape(
        {
            thumbnailUrl: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        }
    )
}


export default PostHeader;