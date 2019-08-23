import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { socketMiddleware } from './socket-middleware';
import { socketHandlers } from './socket-handlers';
import { rootReducer } from './reducers';
import { fromSocketToReduxHandlers } from './from-socket-ro-redux-thunks';

const middlewares = [socketMiddleware("ws://localhost:8081", socketHandlers, fromSocketToReduxHandlers), thunk];

if (process.env.NODE_ENV !== 'production') { 
    middlewares.push(logger)
 }

export const store = createStore(rootReducer, applyMiddleware(...middlewares))