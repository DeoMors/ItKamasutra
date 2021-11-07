const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_LOADER = "TOGGLE_LOADER"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => { 
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed};
                    }

                    return u;
                })
            };
            
            return stateCopy;
        }

        case SET_USERS: {
            let stateCopy = {
                ...state,
                users: action.users
            };
            
            return stateCopy;
        }

        case SET_CURRENT_PAGE: {
            let stateCopy = {
                ...state,
                currentPage: action.currentPage
            };

            return stateCopy;
        }

        case SET_TOTAL_USERS_COUNT: {
            let stateCopy = {
                ...state,
                totalUsersCount: action.totalCount
            };

            return stateCopy;
        }

        case TOGGLE_LOADER: {
            let stateCopy = {
                ...state,
                isLoading: action.isLoading
            };

            return stateCopy;
        }

        default: 
            return state;
    }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const togglePreloader = (isLoading) => ({ type: TOGGLE_LOADER, isLoading });

export default usersReducer;