import React from 'react';
import Friend from './Friend/Friend';
import classes from './Friends.module.css';

const Friends = (props) => {
    let friends = props.friendsData.map(f => <Friend name={f.name} />);

    return (
        <div>
            <div className={classes.friendsHeader}>Друзья</div>
            <div className={classes.friends}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;