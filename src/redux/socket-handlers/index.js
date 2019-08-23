import { socketActionTypes } from "../action-types";
import { isLoggedSelector } from "../selectors";

export const socketHandlers = {
    [socketActionTypes.chatMessage]: (store, payload) => {
        const messageText = payload;
        const userName = isLoggedSelector(store.getState())
        return {
            messageText, userName
        }
    },
}