import { combineReducers } from 'redux';
import userReducer from './userReducer';
import allUsersReducer from './allUsersReduser';


export default combineReducers({
    user: userReducer,
    userList: allUsersReducer,
});