import React, {PureComponent} from "react";
import {GlobalStyle} from "./global-style"
import { Provider } from 'react-redux'
import { store } from "../redux";
import { Content } from "./content";

export class RootPage extends PureComponent {
    render(){
        return (
            <Provider store = {store}>
                <GlobalStyle/>
                <Content/>
            </Provider>
        )
    }
}
