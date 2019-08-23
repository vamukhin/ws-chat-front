import React, {Component} from "react";
import { StyledMessagesArea, ChatForm, ChatInput, SentMessagesContainer } from "./messages-container-styled";
import { connect } from 'react-redux'
import { sendMessage } from "../../redux/actions";
import { Messages } from "./message";

class MessagesContainerAreaDumb extends Component {
    textInput = React.createRef();
    send = (e) => {
        e.preventDefault();
        console.log(this.textInput.current.value, this.props);
        const message = this.textInput.current.value
        this.props.sendMessage(message)
        this.textInput.current.value = ''
    }

    render(){
        return (
            <StyledMessagesArea>
                <SentMessagesContainer>
                    <Messages/>
                </SentMessagesContainer>
                <ChatForm onSubmit = {this.send}>
                    <ChatInput ref={this.textInput}/>
                </ChatForm>
            </StyledMessagesArea>
        )
    }
}

const mapDispatchToProps = {
    sendMessage
}

export const MessagesContainerArea = connect(null, mapDispatchToProps)(MessagesContainerAreaDumb) 