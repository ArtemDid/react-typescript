import { Actions } from '../../../../libs/utils/store/types';
import {
    ADD_NEW_POST,
    DELETE_POST,
    GET_POSTS,
    SET_POSTS,
    UPDATE_POST,
    UPDATE_SELECTED_POST,
    GET_USERS_POSTS,
    SET_USERS_POSTS
} from "../actionTypes";
import {Posts} from "../types";
import { PostsInitialValues } from "../initialState";

export default (state: Posts = PostsInitialValues, { type, payload }: Actions): Posts => {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
            };
        case GET_USERS_POSTS:
            return {
                ...state,
            };
        case SET_POSTS:
            return {
                ...state,
                list: payload.list,
                pages:payload.pages
            };
        case SET_USERS_POSTS:
        return {
            ...state,
            usersPosts: payload,
        };
        case ADD_NEW_POST:
            return {
                ...state,
                list: [payload, ...state.list],
            };
        case UPDATE_POST:
            return {
                ...state,
                list: state.list.map((post: any) =>{
                   if (post.id == payload.id )
                   post = payload
                   return post
                } )
            };
        case UPDATE_SELECTED_POST:
            return {
                ...state,
                usersPosts: state.usersPosts.map((post: any) =>{
                   if (post.id == payload.id ){
                    post = payload
                   }
                   
                   return post
                } )
            };
        case DELETE_POST:
            return {
                ...state,
                list: state.list.filter((post: any) => post.id !== payload),
                usersPosts:state.usersPosts.filter((post: any) => post.id !== payload)
            };
        default:
            return state;
    }
};