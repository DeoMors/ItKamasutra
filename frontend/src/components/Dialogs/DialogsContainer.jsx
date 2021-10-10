import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    return (
        <Dialogs sendMessage={() => props.store.dispatch(sendMessageActionCreator())}
                 updateNewMessage={(text) => props.store.dispatch(updateNewMessageActionCreator(text))}
                 dialogsPage={props.store.getState().dialogsPage} />
    );
}

export default DialogsContainer;
