import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {    
    return (
        <MyPosts updateNewPostText={(text) => props.store.dispatch(updateNewPostActionCreator(text))} 
                 addPost={() => props.store.dispatch(addPostActionCreator())} 
                 postsData={props.store.getState().profilePage.postsData}
                 newPostText={props.store.getState().profilePage.newPostText} />
    )
}

export default MyPostsContainer;

