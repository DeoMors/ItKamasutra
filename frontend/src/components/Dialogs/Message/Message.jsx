import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div className={classes.message + " " + (props.myMessage ? classes.myMessage : classes.companionMessage)}>
            <div>{props.text}</div>
        </div>
    )
}

export default Message;
