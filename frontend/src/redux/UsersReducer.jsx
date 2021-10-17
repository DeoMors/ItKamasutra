const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: []
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
                users: [...state.users, ...action.users]
            };
            
            return stateCopy;
        }

        default: 
            return state;
    }
};

export const toggleFollowActionCreator = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;