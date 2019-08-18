import React, {PureComponent} from "react";
import { connect } from 'react-redux'
import { LoginContainer, LoginForm, LoginHeader, LoginInput } from "./login-styled";
import { loginAction } from "../../redux/actions";

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
            <LoginContainer>
                <LoginForm onSubmit = {this.onSubmit}>
                    <LoginHeader>Введите имя</LoginHeader>
                   
                    <LoginInput ref={this.textInput}/>
                    
                    <button type = "submit">Залогиниться</button>
                </LoginForm>
            </LoginContainer>
        )
    }
}

const mapDispatchToProps = ({
    loginAction
})

export const Login = connect(null, mapDispatchToProps)(LoginDumb)