import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from './reducers/root-reducer';


const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const Store = createStore(RootReducer, applyMiddleware(...middlewares));

export default Store;
