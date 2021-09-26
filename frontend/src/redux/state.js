let store = {
    _state: {
        profilePage: {  
            postsData: [
                { id: 1, message:"Wasuuuup", likesCount:30 },
                { id: 2, message:"It's my first post", likesCount:13}
            ],
            newPostText: "New Post Value"
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Maria" }
            ],    
            messagesData: [
                { id: 1, message: "Hi", myMessage: true },
                { id: 2, message: "How is your it-kamasutra?", myMessage: false },
                { id: 3, message: "Yo yo yo", myMessage: true }
            ]    
        },
        sidebar: {
            friendsData: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" }
            ]
        }
    },
    _callSubscriber () {},
    getState(){
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.postsData.push(newPost);
        this._callSubscriber(this._state);
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;