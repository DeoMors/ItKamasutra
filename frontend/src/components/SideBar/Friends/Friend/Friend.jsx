import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <img src='https://i.ibb.co/9rBmJdw/Noelle.png' />
            <div className={classes.friendName}>{props.name}</div>
        </div>
    )
}

export default Friend;