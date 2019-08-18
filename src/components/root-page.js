import React, {PureComponent} from "react";
import {GlobalStyle} from "./global-style"
import { Provider } from 'react-redux'
import { store } from "../redux";
import { Login } from "./login/login-form";

export class RootPage extends PureComponent {
    render(){
        return (
            <Provider store = {store}>
                <GlobalStyle/>
                <Login/>
            </Provider>
        )
    }
}