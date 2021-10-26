import React from 'react';
import Friends from './Friends/Friends';
import Navbar from './Navbar/Navbar';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <Navbar />
            <Friends friendsData={props.state.friendsData} />
        </div>
    )
}

export default Sidebar;