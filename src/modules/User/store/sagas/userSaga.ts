import { Actions} from "../../../../libs/utils/store/types";
import { call, put } from 'redux-saga/effects';
import {setUser, getUserError, getAllUsers, updateUser} from "../actions";
import {UserService} from "../../services";

const userService = UserService.getInstance();

export function* getAuthUser({}: Actions) {

    try {
        const {data} = yield call(userService.getAuthUserByToken);
        
        if (data) {
            
            yield put(setUser(data))
        }
    } catch (error) {

        if (error.statusCode === 401) {
            window.location.href = '/';
        }
        yield put(getUserError([error.response.data.message]));
    }
}

export function* fetchAllUsers({payload}: Actions) {

    if(payload == undefined)
    payload=1

    const {data} = yield call(userService.getAllUsers,payload);
    yield put(getAllUsers(data))
}

export function* deletingUser({ payload }: Actions) {

    try {
        yield call(userService.deleteUser, payload);
    }catch(e){
        console.log(e)
    }
}

export function* updatingUserInfo({ payload }: Actions) {

    try {
        const {data} = yield call(userService.updateUserInfo, payload, payload.id);
        yield put(updateUser(data));
    }catch(e){
        console.log(e)
    }
}

export function* updatingUserPassword({ payload }: Actions) {

    try {
        const {data} = yield call(userService.updUserPassword, payload.id, payload);
        if(data.message === 'Success') {
            alert(data.message);
        }else {
            alert(data.message);
        }
    }catch(e){
        console.log(e)
    }
}