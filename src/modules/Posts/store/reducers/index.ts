import { combineReducers } from 'redux';
import postReducer from './postReducer';
import selectedPostReducer from './selectedPost';

export default combineReducers({
    posts: postReducer,
    selectedPost: selectedPostReducer 
});