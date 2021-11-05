import * as axios from 'axios'
import React from 'react';
import User from './User/User';
import styles from './Users.module.css'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items);
        });
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        let users = this.props.users.map(u => <User user={u} toggleFollow={this.props.toggleFollow} />);

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {users}
                {pages.map(p => {
                    return <span className={p == this.props.currentPage && styles.selectedPage}
                                 onClick={() => this.onPageClick(p)}>{p}</span>
                })}
            </div>
        );
    }
}

export default Users;
