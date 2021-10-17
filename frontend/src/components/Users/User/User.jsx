import React from 'react';
import classes from './User.module.css'

const User = (props) => {
    debugger;
    return (
        <div>
            <div>
                <img src={props.user.photoUrl} className={classes.userPhoto} />
            </div>
            <div>
                <div>{props.user.fullName}</div>
                <div>{props.user.status}</div>
                <div>{props.user.location.country}, {props.user.location.city}</div>
                { props.user.followed 
                    ? <button onClick={() => props.toggleFollow(props.user.id)}>Unfollow</button> 
                    : <button onClick={() => props.toggleFollow(props.user.id)}>Follow</button> }                
            </div>
        </div>
    )
}

export default User;
