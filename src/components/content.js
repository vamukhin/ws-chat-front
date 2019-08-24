import React, {Component} from "react";
import { Login } from "./login-form";
import { MessagesContainerArea } from "./messages-container/messages-container-area";
import { connect } from 'react-redux'
import { nameSelector } from "../redux/selectors";

class ContentDumb extends Component {
    render(){
        return this.props.isLogged ?  <MessagesContainerArea/> : <Login/>
    }
}

const mapStateToProps = state => ({
    isLogged: nameSelector(state)
})

export const Content = connect(mapStateToProps)(ContentDumb)