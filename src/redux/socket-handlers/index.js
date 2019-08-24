import { socketActionTypes } from "../action-types";
import { nameSelector } from "../selectors";

export const socketHandlers = {
    [socketActionTypes.chatMessage]: (store, payload) => {
        const messageText = payload;
        const userName = nameSelector(store.getState())
        return {
            messageText, userName
        }
    },
}