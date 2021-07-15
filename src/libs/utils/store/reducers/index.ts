import { combineReducers } from 'redux';

import rootReducer from './root';
import { store as authStore } from '../../../../modules/Auth';
import { store as userStore } from '../../../../modules/User';
import {store as postStore} from '../../../../modules/Posts'

const reducer = combineReducers({
    root: rootReducer,
    auth: authStore.reducers,
    user: userStore.reducers,
    posts:postStore.reducers,
});

export type State = ReturnType<typeof reducer>;

export default () => reducer;
