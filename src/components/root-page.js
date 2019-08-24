import React, {PureComponent} from "react";
import { Provider } from 'react-redux'
import { store } from "../redux";
import { Content } from "./content";

export class RootPage extends PureComponent {
    render(){
        return (
            <Provider store = {store}>
                <Content/>
            </Provider>
        )
    }
}
