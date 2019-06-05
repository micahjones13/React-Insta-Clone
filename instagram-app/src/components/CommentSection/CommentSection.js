import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import Form from './Form';
import './CommentSection.css';
class CommentSection extends React.Component {
    state = {
        comments: this.props.comments,
        text: '',
        id: ''
    }

    addNewComment = ( e, indexNum) => {
        //The function will add the comment that is on the event object to the post that is at that index number.
        e.preventDefault();
        const newComment = {
            text: this.state.text,
            username: 'Thrifty', //hard coded username
            id: Date.now() //keep id's unique
        };
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }

    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value  
         
        });
      }

    render() {
    return (
        <div className = 'comment-section'>
          {
              this.state.comments.map (item => {
                  return (
                      <Comment
                        item={item}
                        key={item.id}
                      />
                      
                  )
              })
          }
          <Form 
            addNewComment = {this.addNewComment}
            value = {this.state.text}
            onChange = {this.handleChanges}
          />
         
   
        </div>
    );
  }
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
//CODE BEFORE CHANGING INTO A CLASS TO HANDLE STATE
//
// const CommentSection = (props) => {
//     return (
//         <div className = 'comment-section'>
//           {
//               props.comments.map (item => {
//                   return (
//                       <Comment
//                         item={item}
//                         key={item.id}
//                       />
                      
//                   )
//               })
//           }
          
//           <input placeholder = 'Add a comment'></input>
         
   
//         </div>
//     );
// }

// CommentSection.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.shape(
//         {
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             username: PropTypes.string.isRequired
//         }
//     )
//     )
// }

// export default CommentSection;



//************Fixed */
// Must map over the props given here to create a new array with each comment so that the <comment> is dynamic.