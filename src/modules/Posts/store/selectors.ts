import {State} from "../../../libs/utils/store/reducers";

export const fetchPostsSelector = (state: State) => state.posts.posts;

export const selectedPostSelector = (state: State) => state.posts.selectedPost;

export const PostPages = (state: State) => state.posts.posts.pages;

export const usersPostsSelector = (state: State) => state.posts.posts.usersPosts;

export const pagesUsersPostsSelector = (state: State) => state.posts.posts.pages;