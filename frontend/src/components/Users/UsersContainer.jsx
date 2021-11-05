import { connect } from 'react-redux';
import { setUsersActionCreator, toggleFollowActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../../redux/UsersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount));
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
