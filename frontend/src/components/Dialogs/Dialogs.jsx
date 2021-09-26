import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = props.state.messagesData.map(m => <Message text={m.message} myMessage={m.myMessage} />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <textarea placeholder="Написать сообщение" ref={newMessageElement}></textarea>
                    <button onClick={ sendMessage }>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
