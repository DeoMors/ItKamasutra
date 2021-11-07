import { connect } from 'react-redux';
import { sendMessage, updateNewMessage } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessage());
        },
        updateNewMessage: (body) => {
            dispatch(updateNewMessage(body));
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
