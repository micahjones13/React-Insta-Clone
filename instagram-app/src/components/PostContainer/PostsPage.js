import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

const PostsPage = (props) => {
    return(
        <div className = 'posts-page'>
        <SearchBar 
            handleSearch = {props.handleSearch}
            value = {props.value}
        />

        {
            props.dataArray.map(item => {
                return(
                    <PostContainer
                        key = {item.id}
                        item={item}
                       
                    />
                )
            })
        }
        </div>
    );
}

export default PostsPage;