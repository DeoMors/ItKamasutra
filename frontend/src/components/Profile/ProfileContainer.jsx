import React from 'react';
import Profile from './Profile';
import { loadProfile } from '../../redux/ProfileReducer'
import axios from 'axios';
import { connect } from 'react-redux';

class ReactComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            debugger;
            this.props.loadProfile(response.data);
        });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    };
}

let mapDispatchToProps = {
    loadProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactComponent);