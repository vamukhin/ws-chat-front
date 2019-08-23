import React, {PureComponent} from "react";
import { connect } from 'react-redux'
import { messagesSelector } from "../../redux/selectors";

class Message extends PureComponent {
    render(){
        return this.props.messages.map(m => (
            <div key = {m.messageId}>{m.userName}: {m.messageText}</div>
        ))
    }
}

const mapStateToProps = state => ({
    messages: messagesSelector(state)
})

export const Messages = connect(mapStateToProps)(Message)