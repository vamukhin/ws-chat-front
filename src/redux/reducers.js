import { combineReducers } from "redux";
import {handleAction} from "redux-actions"
import { actionTypes } from "./action-types";

const primitiveReducer = (state, payload) => payload;

const id = handleAction(actionTypes.SET_USER_ID, primitiveReducer, null);
const name = handleAction(actionTypes.SET_NAME, primitiveReducer, null);



export const rootReducer = combineReducers({
    id,
    name,
    messages: (state = [], action) => [...state, state.payload],

})