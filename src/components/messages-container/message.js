import React, {PureComponent} from "react";
import { connect } from 'react-redux'
import { messagesSelector, nameSelector } from "../../redux/selectors";

class Message extends PureComponent {

    chooseClass = (messageSenderName) => 
      messageSenderName === this.props.userName ? "message-container host-message" : "message-container friend-message"
    

      messagesEndRef = React.createRef()
  
      componentDidMount () {
          this.scrollToBottom()
        }
      componentDidUpdate () {
          this.scrollToBottom()
      }
      scrollToBottom = () => {
          this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }

    render(){
        return (
            <>
            {
                this.props.messages.map(m => (
                   <div 
                        className = {this.chooseClass(m.userName)}
                        key = {m.messageId} 
                     >
                      <div className = "message-text">{m.userName}: {m.messageText}</div>
                   </div>
                   
                ))
            }
            <div ref={this.messagesEndRef} />
            </>
        )
        
        
    }
}

const mapStateToProps = state => ({
    messages: messagesSelector(state),
    userName: nameSelector(state)
})

export const Messages = connect(mapStateToProps)(Message)