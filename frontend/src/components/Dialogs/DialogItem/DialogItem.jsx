import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={classes.active}>
            <img src='https://i.ibb.co/9rBmJdw/Noelle.png' />
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
