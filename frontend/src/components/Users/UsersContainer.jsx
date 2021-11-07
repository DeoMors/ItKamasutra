import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUsers, toggleFollow, setCurrentPage, setTotalUsersCount, togglePreloader } from '../../redux/UsersReducer';
import Preloader from '../Shared/Preloader/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items);
            this.props.togglePreloader(false);
        });
    }

    onPageClick = (pageNumber) => {
        this.props.togglePreloader(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.togglePreloader(false);
        });
    };

    render() {
        return <>
            {this.props.isLoading ? <Preloader /> : null };
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageClick={this.onPageClick}
                      users={this.props.users}
                      toggleFollow={this.props.toggleFollow} />;
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    };
}

let mapDispatchToProps = {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togglePreloader
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);;
