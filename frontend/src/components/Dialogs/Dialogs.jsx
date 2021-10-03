import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/DialogsReducer';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = props.state.messagesData.map(m => <Message text={m.message} myMessage={m.myMessage} />)

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.dispatch(sendMessageActionCreator());
        props.dispatch(updateNewMessageActionCreator(''));
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <textarea placeholder="Написать сообщение" ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessageText} />
                    <button onClick={ onSendMessage }>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
