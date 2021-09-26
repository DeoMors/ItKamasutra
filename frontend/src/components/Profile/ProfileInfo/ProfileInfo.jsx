import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.ecomagazine.com/images/Newsletter/0_2019/Week_11-18-19/birdseyeview_ocean.jpg' width="100%"/>
            </div>
            <div className={classes.descriptionBlock}>ava + desc</div>
        </div>
    )
}

export default ProfileInfo;