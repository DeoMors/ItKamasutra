import * as axios from 'axios'
import React from 'react';
import User from './User/User';
import styles from './Users.module.css'


const Users = (props) => {
        
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

    let users = props.users.map(u => <User user={u} toggleFollow={props.toggleFollow} />);
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {users}
        </div>
    )
}

export default Users;
