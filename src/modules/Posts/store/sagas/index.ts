import { SagaIterator } from 'redux-saga';
import {all, takeEvery} from 'redux-saga/effects';
import {
    GET_POSTS,
    DELETE_POST,
    CREATE_POST,
    UPDATE_POST,
    GET_USERS_POSTS,
    SEARCH_POSTS
} from "../actionTypes";
import {
    gettingPosts,
    gettingCustomerPosts,
    updatingPost,
    creatingPost,
    deletingPost,
    searchingPosts
} from './postSaga';


export default function* productsWatch(): SagaIterator {
    yield all([
        takeEvery(GET_USERS_POSTS, gettingCustomerPosts),
        takeEvery(DELETE_POST, deletingPost),
        takeEvery(CREATE_POST, creatingPost),
        takeEvery(UPDATE_POST, updatingPost),
        takeEvery(GET_POSTS, gettingPosts),
        takeEvery(SEARCH_POSTS, searchingPosts),
    ]);
}
