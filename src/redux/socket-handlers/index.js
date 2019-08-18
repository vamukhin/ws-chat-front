import { socketActionTypes } from "../action-types";
import { loginHandler } from "./login-handler";

export const socketHandlers = {
    [socketActionTypes.auth]: loginHandler
}