import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
        <img src='https://i.ibb.co/9rBmJdw/Noelle.png' />
        <span>{props.message}</span>
        <div>like {props.likesCount}</div>
    </div>
}

export default Post;

      