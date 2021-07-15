import {State} from "../../../libs/utils/store/reducers";

export const getUserSelector = (state: State) => state.user.user;

export const getListWithAllUsersSelector = (state: State) => state.user.userList;

export const pagesAllUsersSelector = (state: State) => state.user.userList.pages;