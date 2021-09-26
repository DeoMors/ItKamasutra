import React from 'react';
import Friends from './Friends/Friends';
import Navbar from './Navbar/Navbar';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <Navbar />
            <Friends friendsData={props.state.friendsData} />
        </div>
    )
}

export default Sidebar;