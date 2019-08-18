import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { socketMiddleware } from './socket-middleware';
import { socketHandlers } from './socket-handlers';
import { rootReducer } from './reducers';

const middlewares = [socketMiddleware("ws://localhost:8081", socketHandlers), thunk];

if (process.env.NODE_ENV !== 'production') { 
    middlewares.push(logger)
 }

export const store = createStore(rootReducer, applyMiddleware(...middlewares))