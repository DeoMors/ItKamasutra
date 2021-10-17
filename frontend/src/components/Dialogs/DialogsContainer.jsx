import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
}

let mapDispatchToProps = () => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessage: (body) => {
            dispatch(updateNewMessageActionCreator(body));
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
