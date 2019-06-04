import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

import './CommentSection.css';
const CommentSection = (props) => {
    return (
        <div className = 'comment-section'>
          {
              props.comments.map (item => {
                  return (
                      <Comment
                        item={item}
                        key={item.id}
                      />
                      
                  )
              })
          }
          
          <input placeholder = 'Add a comment'></input>
         
   
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
        }
    )
    )
}

export default CommentSection;

//<Comment comments = {props.comments} />

//<Comment comments = {props.item.comments} />
// { props.item.map(commentItem => {
//     return(
//         <Comment 
//             commentArr = {commentItem.comments}
//         />
//     )
// })
    
// }

// <Comment
// comments = {props.comments}
// /> 



//************Fixed */
// Must map over the props given here to create a new array with each comment so that the <comment> is dynamic.