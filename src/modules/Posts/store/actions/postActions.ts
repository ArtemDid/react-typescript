import {
    GET_POSTS,
    SET_POSTS,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    ADD_NEW_POST,
    SELECTED_POST,
    CLEAR_SELECTED_POST,
    UPDATE_SELECTED_POST,
    SEARCH_POSTS,
    SET_USERS_POSTS,
    GET_USERS_POSTS
} from "../actionTypes";
import {Actions, PayloadAction} from "../../../../libs/utils/store/types";

export const getPosts = (payload:number): PayloadAction<any>  => ({
    type: GET_POSTS,
    payload
});

export const getUsersPosts = (payload:any): PayloadAction<any>  => ({
    type: GET_USERS_POSTS,
    payload
});

export const setUsersPost = (payload:number): PayloadAction<any>  => ({
    type: SET_USERS_POSTS,
    payload
})

export const searchPosts = (payload:any): PayloadAction<any>  => ({
    type: SEARCH_POSTS,
    payload
});

export const setPosts = (payload:any): PayloadAction<any>  => ({
    type: SET_POSTS,
    payload
});

export const createPost = (payload:any): PayloadAction<any>  => ({
    type: CREATE_POST,
    payload
});

export const updatePost = (payload:any): PayloadAction<any>  => ({
    type: UPDATE_POST,
    payload
});

export const deletePost = (payload:any): PayloadAction<any>  => ({
    type: DELETE_POST,
    payload
});

export const addNewPost = (payload:any): PayloadAction<any>  => ({
    type: ADD_NEW_POST,
    payload
});

export const selectPost = (payload:any): PayloadAction<any>  => ({
    type: SELECTED_POST,
    payload
});

export const clearSelectedPost = (): Actions => ({
    type: CLEAR_SELECTED_POST
});

export const updateSelectedPosts = (payload:any): Actions => ({
    type: UPDATE_SELECTED_POST,
    payload
});
