const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message:"Wasuuuup", likesCount:30 },
        { id: 2, message:"It's my first post", likesCount:13}
    ],
    newPostText: "New Post Value"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            let stateCopy = {
                ...state,
                postsData: [...state.postsData]
            };
            
            stateCopy.postsData.push(newPost);
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText: action.newText
            };
            
            return stateCopy;
        }

        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;