import { SagaIterator } from 'redux-saga';
import { all, takeEvery } from 'redux-saga/effects';
import {
    GET_USER,
    DELETE_USER,
    FETCH_ALL_USERS,
    UPDATE_USER_INFO,
    UPDATE_USER_PASSWORD  
} from "../actionTypes";
import { 
    getAuthUser,
    fetchAllUsers, 
    deletingUser,
    updatingUserInfo,
    updatingUserPassword   
} from './userSaga';

export default function* userWatch(): SagaIterator {
    yield all([
        takeEvery(GET_USER, getAuthUser),
        takeEvery(FETCH_ALL_USERS, fetchAllUsers),
        takeEvery(DELETE_USER, deletingUser),
        takeEvery(UPDATE_USER_INFO, updatingUserInfo),
        takeEvery(UPDATE_USER_PASSWORD, updatingUserPassword),
    ]);
}
