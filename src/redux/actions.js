import { socketActionTypes, actionTypes } from './action-types';

const createAction = (type) => (payload) => ({
    type,
    payload
})

const createWebSocketAction = (type) => (payload) => ({
    type,
    payload,
    isForSocket: true
})



export const loginAction = createAction(actionTypes.SET_NAME);

export const getMessage = createAction(actionTypes.GET_MESSAGE)

export const sendMessage = createWebSocketAction(socketActionTypes.chatMessage)