import React, {Component} from "react";
import { Login } from "./login/login-form";
import { MessagesContainerArea } from "./messages-container/messages-container-area";
import { connect } from 'react-redux'
import { isLoggedSelector } from "../redux/selectors";

class ContentDumb extends Component {
    render(){
        return this.props.isLogged ?  <MessagesContainerArea/> : <Login/>
    }
}

const mapStateToProps = state => ({
    isLogged: isLoggedSelector(state)
})

export const Content = connect(mapStateToProps)(ContentDumb)