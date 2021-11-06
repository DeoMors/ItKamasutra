import React from 'react';
import styles from './Users.module.css'
import User from './User/User';

let Users = (props) => {    
    let users = props.users.map(u => <User user={u} toggleFollow={props.toggleFollow} />);

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {users}
            {pages.map(p => {
                return <span className={p == props.currentPage && styles.selectedPage}
                             onClick={() => props.onPageClick(p)}>{p}</span>
            })}
        </div>
    );
}

export default Users;