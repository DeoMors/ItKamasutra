import React from 'react';
import User from './User/User';
import classes from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { 
                id: 1, 
                followed: false, 
                fullName: "Dmitry K", 
                status: "Wassup", 
                photoUrl: 'https://pbs.twimg.com/profile_images/1799215218/dima2.jpg',
                location: { 
                    city: "Minsk",
                    country: "Belarus"
                }
            },
            {
                id: 2, 
                followed: true,
                fullName: "Benny B", 
                status: "Teamwork is dream work!", 
                photoUrl: 'https://www.gamehelper.top/wp-content/uploads/2020/10/bennet-gajd-v-genshin-impact-min.jpg',
                location: { 
                    city: "Mondstadt",
                    country: "Taivat"
                }
            },
            {
                id: 3, 
                followed: false, 
                fullName: "Kira Ne Lait", 
                status: "I love pineapples <3", 
                photoUrl: 'http://pm1.narvii.com/6967/4682fe603129c0b762d6f372ccc81f64581c978fr1-1024-768v2_uhq.jpg',
                location: { 
                    city: "Moscow",
                    country: "Russia"
                }
            }
        ]);
    }

    let users = props.users.map(u => <User user={u} toggleFollow={props.toggleFollow} />);
    return (
        <div>
            {users}
        </div>
    )
}

export default Users;
