import { combineReducers } from "redux";
import {handleAction} from "redux-actions"
import { actionTypes } from "./action-types";

const primitiveReducer = (state, action) => action.payload;
const newItemToArrayReducer = (state = [], action) => [...state, action.payload] 


const id = handleAction(actionTypes.SET_USER_ID, primitiveReducer, null);
const name = handleAction(actionTypes.SET_NAME, primitiveReducer, null);
const messages = handleAction(actionTypes.GET_MESSAGE, newItemToArrayReducer, [])


export const rootReducer = combineReducers({
    id,
    name,
    messages,

})