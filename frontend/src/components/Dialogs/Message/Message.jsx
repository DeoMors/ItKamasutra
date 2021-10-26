import React from 'react';
import styles from './Message.module.css'

const Message = (props) => {
    return (
        <div className={styles.message + " " + (props.myMessage ? styles.myMessage : styles.companionMessage)}>
            <div>{props.text}</div>
        </div>
    )
}

export default Message;
