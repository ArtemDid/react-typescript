import { Actions } from '../../../../libs/utils/store/types';
import {DELETE_USER, SET_ALL_USERS, UPDATE_USER_PASSWORD} from "../actionTypes";
import {GetAllUsersInStore} from "../types";
import {AllUsersInitialValues} from "../initialState";


export default (state: GetAllUsersInStore = AllUsersInitialValues, { type, payload }: Actions): GetAllUsersInStore => {
    switch (type) {
        case SET_ALL_USERS:
            return {
                ...state,
                allUsers: payload.list,
                pages:payload.pages
            };
        case UPDATE_USER_PASSWORD: 
            return {
                ...state
            };
        case DELETE_USER: 
            return {
                ...state, 
                allUsers: state.allUsers.filter((user: any) => user.id !== payload)
            };              
        default:
            return state;
    }
};