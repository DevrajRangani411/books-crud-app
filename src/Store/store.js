import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../Redux/rootReducer';
// import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../Saga/index"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

 sagaMiddleware.run(rootSaga)

export default store;