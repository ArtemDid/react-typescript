import {Posts, SelectedPost, PostFormValues} from "./types";

export const PostsInitialValues: Posts = {
    list: [],
    pages:1,
    usersPosts:[],
    userPostsPages:1
};

export const selectedPostInitialValues: SelectedPost = {
    post: {},
};

export const createPostInitialValues: PostFormValues = {
        header:'',
        description:'',
        user_id:'',
        image:'',
        place:'',
        phone:'',
        email:'',
        contact_face:'',
};