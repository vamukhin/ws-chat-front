export function socketMiddleware(host, reduxActionHandlers, socketHandlers) {
    var socket = new WebSocket(host);

    return (store) => (next) => (action) => {

        socket.onmessage = function(event) {
            const socketAction = JSON.parse(event.data)
            console.log(socketAction)
            const socketHandler = socketHandlers[socketAction.type];
            if(socketHandler) {
                socketHandler(store, socketAction.payload)
            } else {
                console.warn("no hadnler for socket to redux action");
            }
        }

        if(typeof action === "object" && action !== null && action.isForSocket) {
            const {type, payload} = action;
            const handlerForSocket = reduxActionHandlers[type];
            let socketMessage = {type};
            if(handlerForSocket) {
                socketMessage.payload = handlerForSocket(store,payload)
            } else {
                console.warn("no handler for redux to socket action");
                socketMessage.payload = payload;
            }
            const jsonMessage = JSON.stringify(socketMessage);
            
            socket.send(jsonMessage)
        } else {
            next(action);
        }
    }
}
