import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const PostContainer = (props) => {
    return(
        <div className = 'post-container'>
            <PostHeader item = {props.item} />
             <CommentSection 
                comments = {props.item.comments}
            />
        
        </div>
    );
}

PostContainer.propTypes = {
    item: PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(PropTypes.shape (
                {
                    id: PropTypes.number.isRequired,
                    username: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                }
            
            ))

        }


    )
}

export default PostContainer;

//<CommentSection comments = {props.data}/>


// {
//     props.data.map(item => {
//         return(
//             <CommentSection
//                 key = {item.id}
//                 item={item}
//             />
//         )
//     })
// }