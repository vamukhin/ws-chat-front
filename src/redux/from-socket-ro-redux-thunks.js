import { socketActionTypes } from "./action-types";
import { getMessage } from "./actions";

export const fromSocketToReduxHandlers = {
    [socketActionTypes.chatMessage]: (store, payload) => {
        const action = getMessage(payload);
        store.dispatch(action)
    }
}