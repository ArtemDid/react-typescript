export interface Posts {
    list: any[]
    pages:number
    usersPosts:any[]
    userPostsPages:number
}

export interface GetPostsInStore {
    list: any[];
}

export interface UpdatePostValues {
    header?:string,
    description?:string,
    user_id?:string,
    image?:any,
    place?:string,
    phone?:string,
    email?:string,
    contact_face?:string,
}

export interface PostFormValues{
    id?:string,
    header?:string,
    description?:string,
    user_id?:string,
    image?:any,
    place?:string,
    phone?:string,
    email?:string,
    contact_face?:string,
};

export interface SelectedPost {
    post: any;
}



export interface SelectedPostInStore {
    post: any;
}
