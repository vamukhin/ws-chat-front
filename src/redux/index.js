import { createStore, applyMiddleware  } from 'redux'
import logger from 'redux-logger'
import { socketMiddleware } from './socket-middleware';
import { socketHandlers } from './socket-handlers';
import { rootReducer } from './reducers';
import { fromSocketToReduxHandlers } from './from-socket-ro-redux-thunks';

const middlewares = [socketMiddleware("wss://wschat-server.herokuapp.com", socketHandlers, fromSocketToReduxHandlers)];

if (process.env.NODE_ENV !== 'production') { 
    middlewares.push(logger)
 }

export const store = createStore(rootReducer, applyMiddleware(...middlewares))