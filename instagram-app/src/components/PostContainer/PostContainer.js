import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import Post from './Post';

import './PostContainer.css';

class PostContainer extends React.Component {
    state = {
        likes: this.props.item.likes
    }

    incrementLikes = (e) => {
        e.preventDefault();
        this.setState({
            likes: this.props.item.likes++
        })
     }

    render(){
    return(
        <div className = 'post-container'>
            <div className = 'post-comment-header-container'>
                <PostHeader item = {this.props.item} />
                <Post
                     item = {this.props.item} 
                     incrementLikes = {this.incrementLikes}
                />
                <CommentSection 
                    comments = {this.props.item.comments}
                />
            </div>
        </div>
    );
    }
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

//BEFORE CLASS CONVERSION

// const PostContainer = (props) => {
//     return(
//         <div className = 'post-container'>
//             <div className = 'post-comment-header-container'>
//                 <PostHeader item = {props.item} />
//                 <Post
//                      item = {props.item} 
//                      incrementLikes = {props.incrementLikes}
//                 />
//                 <CommentSection 
//                     comments = {props.item.comments}
//                 />
//             </div>
//         </div>
//     );
// }

// PostContainer.propTypes = {
//     item: PropTypes.shape(
//         {
//             id: PropTypes.string.isRequired,
//             username: PropTypes.string.isRequired,
//             thumbnailUrl: PropTypes.string.isRequired,
//             imageUrl: PropTypes.string.isRequired,
//             likes: PropTypes.number.isRequired,
//             timestamp: PropTypes.string.isRequired,
//             comments: PropTypes.arrayOf(PropTypes.shape (
//                 {
//                     id: PropTypes.number.isRequired,
//                     username: PropTypes.string.isRequired,
//                     text: PropTypes.string.isRequired,
//                 }
            
//             ))

//         }


//     )
// }

// export default PostContainer;