import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
            </div>
            <div className={`${styles.item} ${styles.bottomItem}`}>
                <NavLink to='/logout' activeClassName={styles.active}>Logout</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;