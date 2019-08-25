import React, {Component} from "react";
import { connect } from 'react-redux'
import { sendMessage } from "../../redux/actions";
import { Messages } from "./message";

class MessagesContainerAreaDumb extends Component {
    textInput = React.createRef();

    send = (e) => {
        e.preventDefault();
        const message = this.textInput.current.value;
        if(typeof message === 'string' && message.length > 0) {
            this.props.sendMessage(message)
            this.textInput.current.value = '';
            this.textInput.current.focus()
        }
    }

    render(){
        return (
            <div className = "messages-area">
                <div className = "sent-messages-container">
                    <Messages/>
                </div>
                <form className = "chat-form" onSubmit = {this.send}>
                    <input className="chat-input" autoFocus  ref={this.textInput}/>
                    <button className = "chat-button" type = 'submit'/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    sendMessage
}

export const MessagesContainerArea = connect(null, mapDispatchToProps)(MessagesContainerAreaDumb) 