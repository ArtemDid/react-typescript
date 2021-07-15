import { all } from 'redux-saga/effects';
import {authWatch} from '../../../../modules/Auth/store';
import {userWatch} from "../../../../modules/User/store";
import {postsWatch} from "../../../../modules/Posts/store"

export default function* IndexSagas() {
    yield all([
        authWatch(),
        userWatch(),
        postsWatch()
    ]);
}
