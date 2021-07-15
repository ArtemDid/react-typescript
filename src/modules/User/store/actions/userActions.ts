import {Actions, PayloadAction} from "../../../../libs/utils/store/types";
import {
    SET_USER,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    GET_USER_ERRORS_CLEAR,
    UPDATE_USER,
    UPDATE_USER_INFO,
    FETCH_ALL_USERS,
    SET_ALL_USERS,
    DELETE_USER,
    UPDATE_USER_PASSWORD
} from "../actionTypes";

export const getUser = (): Actions => ({
    type: GET_USER,
});

export const setUser = (payload: any): PayloadAction<string[]> => ({
    type: SET_USER,
    payload,
});

export const getUserError = (payload: string[]): PayloadAction<string[]> => ({
    type: GET_USER_ERROR,
    payload,
});

export const getUserSuccess = (): Actions => ({
    type: GET_USER_SUCCESS
});

export const cleanGetUserErrors = (): Actions => ({
    type: GET_USER_ERRORS_CLEAR
});

export const updateUser = (payload: any): PayloadAction<string[]> => ({
    type: UPDATE_USER,
    payload,
});

export const updateUserInfo = (payload: any): PayloadAction<string[]> => ({
    type: UPDATE_USER_INFO,
    payload,
});

export const fetchAllUsers = (payload:any): Actions => ({
    type: FETCH_ALL_USERS,
    payload
});

export const getAllUsers = (payload: any): PayloadAction<string[]> => ({
    type: SET_ALL_USERS,
    payload
});

export const deleteUser = (payload: any): PayloadAction<string[]> => ({
    type: DELETE_USER,
    payload
});

export const updateUserPassword = (payload: any): PayloadAction<string[]> => ({
    type: UPDATE_USER_PASSWORD,
    payload
});