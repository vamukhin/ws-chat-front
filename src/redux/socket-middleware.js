export function socketMiddleware(host, handlers) {
    var socket = new WebSocket("ws://localhost:8081");

    return (store) => (next) => (action) => {
        if(typeof action === "object" && action !== null && action.isForSocket) {
            const {type, payload} = action;
            const handlerForSocket = handlers[type];
            let socketMessage = {type};
            if(handlerForSocket) {
                socketMessage.payload = handlerForSocket(payload)
            } else {
                console.warn("no hadnler for socket action");
                socketMessage.payload = payload;
            }
            const jsonMessage = JSON.stringify(socketMessage);
            
            socket.send(jsonMessage)
        } else {
            next(action);
        }
    }
}
