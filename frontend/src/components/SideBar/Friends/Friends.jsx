import React from 'react';
import Friend from './Friend/Friend';
import styles from './Friends.module.css';

const Friends = (props) => {
    let friends = props.friendsData.map(f => <Friend name={f.name} />);

    return (
        <div>
            <div className={styles.friendsHeader}>Друзья</div>
            <div className={styles.friends}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;