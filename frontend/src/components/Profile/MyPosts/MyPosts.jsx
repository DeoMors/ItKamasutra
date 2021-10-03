import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/ProfileReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostActionCreator(''));
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostActionCreator(text));
    }
    
    return (
        <div className={classes.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;

