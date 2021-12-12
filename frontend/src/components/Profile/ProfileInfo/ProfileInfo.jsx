import React from 'react';
import Preloader from '../../Shared/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img className={styles.profileBackground} src='https://www.ecomagazine.com/images/Newsletter/0_2019/Week_11-18-19/birdseyeview_ocean.jpg' width="100%"/>
            </div>
            <div className={styles.description}>
                <img className={styles.avatar} src={props.profile.photos.large} />
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;