import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import RootReducer from './reducers/root-reducer';
import thunk from "redux-thunk";


const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const composers = [applyMiddleware(...middlewares)];
const Store = createStore(RootReducer, {}, compose(...composers));

export default Store;
