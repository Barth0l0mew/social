import {createStore, combineReducers} from 'redux'
import { dialogPageReduser } from './dialogPage/dialogPageReduser';
import { postPageReducer } from './postPage/postPageReduser';
import { userPageReduser } from './userPage/userPageReduser';

const rootReducer = combineReducers({
  postPage:postPageReducer,
  messagePage:dialogPageReduser,
  userPage:userPageReduser
})
export let store = createStore(rootReducer);
window.store = store