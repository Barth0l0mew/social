import {createStore, combineReducers} from 'redux';
import { messageReducerRedux } from './reducer/messageReducer';
import { postReducerRedux } from './reducer/postReducer';

const rootReducer = combineReducers ({
  dialogPage: messageReducerRedux, 
  postPage: postReducerRedux})

export let storeRedux = createStore(rootReducer)
