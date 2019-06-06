import React from 'react';
import UsernameStyle from '../Styles/UsernameStyle';
import styled from 'styled-components';

const CommentContainer = styled.div `
    margin-top: -10px;
`;


const Comment = (props) => {
    return(
        <CommentContainer>
        <p><UsernameStyle>{props.item.username} </UsernameStyle>{props.item.text} </p>
        
        
        </CommentContainer>
    );
}

export default Comment;

//<p>{props.comments.username}</p>

//{props.commentArr.username}

// <p><span className = 'username'>{props.item.username}</span> {props.item.text}</p>