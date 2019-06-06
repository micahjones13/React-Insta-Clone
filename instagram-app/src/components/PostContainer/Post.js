import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components';

const PostDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 49%;
    align-items: flex-start;
    padding: 10px;
    span{
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const Post = props => {
    return (
        <PostDiv>
            <img src = {props.item.imageUrl} alt = ''></img>
            <p><FontAwesomeIcon icon = {faHeart} size = '3x' onClick = {props.incrementLikes} />
            <span></span>
            
            <FontAwesomeIcon icon = {faComment} size = '3x' /></p>
            <p>{props.item.likes} likes</p>
            
        </PostDiv>
    )
}

export default Post;


//need to add the images for heart and comment
//<p><img onClick = {props.incrementLikes} src = '' alt = 'heart'></img>  <img src = ' ' alt = 'comment'></img></p>