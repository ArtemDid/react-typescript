import { Actions} from "../../../../libs/utils/store/types";
import { call, put } from 'redux-saga/effects';
import {AuthService, RegisterService} from "../../services";
import {loginUserError, loginUserSuccess, registerUserError, registerUserSuccess} from '../actions';
import { setUser } from '../../../User/store/actions/';
import { logoutUserError, logoutUserSuccess } from "../actions/logoutActions";
import { PostsService } from "../../../Posts/services";
import { setPosts } from "../../../Posts/store/actions";
import ErrorPopup from "../../../../libs/ui/components/modals/ErrorPopup";


const registerService = RegisterService.getInstance();
const authService = AuthService.getInstance();
const postService = PostsService.getInstance();

export function* logining({ payload }: Actions) {
    try {
        const {data} = yield call(authService.login, payload);
 
        if(data.message == undefined){

            const token = data.token.access_token.token;
            authService.applyToken(token);

            yield put(loginUserSuccess()); 
            
            yield put(setUser(data));

            
            let {postData} = yield call(postService.getPosts,1);
            if(postData !== undefined)
            yield put(setPosts(postData))

        }     
        else yield put(loginUserError([data.message.message]));

    } 
    catch (error) {
        console.log(error)
        yield put(loginUserError([error.response.data.message]));
    }
}

export function* logout({}: Actions) {
    try {
        yield call(authService.getLogout);
        authService.logout();
        yield put(logoutUserSuccess());
        window.location.href = `${authService.APP_URL}/login`;
    } catch (error) {
        console.log(error);
        yield put(logoutUserError([error.response.data.message]));
    }
}

export function* registering({ payload }: Actions) {
    try {
        const {data} = yield call(registerService.register, payload);
        if(data.message == undefined){
            window.location.href = `${authService.APP_URL}/login`;
            yield put(registerUserSuccess());
        }
        else{
            yield put(registerUserError([data.message]));
        }
    } catch (error) {
        yield put(registerUserError(error.response.data.errors));
    }
}


