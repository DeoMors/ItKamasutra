import * as axios from 'axios'
import React from 'react';
import User from './User/User';
import styles from './Users.module.css'

class Users extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }
    
    render() {
        let users = this.props.users.map(u => <User user={u} toggleFollow={this.props.toggleFollow} />);
        return (
            <div>
                {users}
            </div>
        );
    }
}

export default Users;
