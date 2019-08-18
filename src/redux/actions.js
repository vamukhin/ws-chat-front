import { socketActionTypes } from './action-types';

const createAction = (type) => (payload) => ({
    type,
    payload
})

const createWebSocketAction = (type) => (payload) => ({
    type,
    payload,
    isForSocket: true
})



export const loginAction = createWebSocketAction(socketActionTypes.auth)