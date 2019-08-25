import React, {PureComponent} from "react";
import { connect } from 'react-redux'
import { loginAction } from "../redux/actions";

class LoginDumb extends PureComponent {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const userName = this.textInput.current.value;
        this.props.loginAction(userName)
    }

    render(){
        return (
         
            <form className = "login-form" onSubmit = {this.onSubmit}>
                <h1 className = "login-header">Введите имя</h1>
                
                <input className = "login-input" ref={this.textInput}/>
                
                <button className = 'login-button' type = "submit">Залогиниться</button>
            </form>
            
        )
    }
}



const mapDispatchToProps = ({
    loginAction
})

export const Login = connect(null, mapDispatchToProps)(LoginDumb)