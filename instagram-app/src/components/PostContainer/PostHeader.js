import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UsernameStyle from '../Styles/UsernameStyle';

const PostHeaderContainer = styled.div `
    display: flex;
    align-items: center;
    width: 49%;
`;
const ThumbNailStyled = styled.img `
    border-radius: 100px;
    padding: 10px;
    width: 6%;
`;
const PostHeader = (props) => {
    return(
        <PostHeaderContainer>
            <ThumbNailStyled src = {props.item.thumbnailUrl} alt = ''></ThumbNailStyled>
             <UsernameStyle type = 'usernameTitle'>{props.item.username} </UsernameStyle>
             
        </PostHeaderContainer>
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