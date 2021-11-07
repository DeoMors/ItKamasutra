import { connect } from 'react-redux';
import { addPost, updateNewPost } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateNewPostText: (body) => {
            dispatch(updateNewPost(body))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

