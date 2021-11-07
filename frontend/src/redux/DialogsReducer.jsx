const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (state.newMessageText === '') {
                return state;
            }

            let newMessage = {
                id: 19,
                message: state.newMessageText,
                myMessage: true
            };

            let stateCopy = {
                ...state,
                messagesData: [...state.messagesData]
            };
            stateCopy.messagesData.push(newMessage);
            return stateCopy;
        }
        
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {
                ...state,
                newMessageText: action.newText
            };
            
            return stateCopy;
        }

        default: 
            return state;
    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessage = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;