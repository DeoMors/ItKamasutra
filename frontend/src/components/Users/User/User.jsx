import React from 'react';
import styles from './User.module.css'
import userPhoto from '../../../assets/images/User.png'

const User = (props) => {
    return (
        <div>
            <div>
                <img src={ props.user.photos.small != null ? props.user.photos.small : userPhoto } className={styles.userPhoto} />
            </div>
            <div>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
                <div>{"props.user.location.country"}, {"props.user.location.city"}</div>
                { props.user.followed 
                    ? <button onClick={() => props.toggleFollow(props.user.id)}>Unfollow</button> 
                    : <button onClick={() => props.toggleFollow(props.user.id)}>Follow</button> }                
            </div>
        </div>
    )
}

export default User;
