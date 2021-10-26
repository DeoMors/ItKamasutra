import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={styles.friend}>
            <img src='https://i.ibb.co/9rBmJdw/Noelle.png' />
            <div className={styles.friendName}>{props.name}</div>
        </div>
    )
}

export default Friend;