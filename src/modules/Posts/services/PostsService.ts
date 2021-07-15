import {AxiosResponse} from "axios";
import {BaseApiService} from "../../../libs/utils/store/services";

export class PostsService extends BaseApiService {
    static _instance: PostsService;

    API_ROUTE = process.env.REACT_APP_API_HOST;

    constructor() {
        super();
    }
    static getInstance(): PostsService {
        if (!PostsService._instance) {
            PostsService._instance = new PostsService();
        }
        return PostsService._instance;
    }

    getPosts = (payload:any): Promise<AxiosResponse> => {
        return this.get(`${this.API_ROUTE}/post?page=${payload.payload}`);
    };

    searchPosts = (payload:any): Promise<AxiosResponse> => {
        return this.get(`${this.API_ROUTE}/post/search?page=${payload.page}&search=${payload.search}`);
    };

    getUsersPosts = (id:string): Promise<AxiosResponse> => {
        return this.get(`${this.API_ROUTE}/post/user/${id}`);
    };

    updatePost = (id:string, post:any): Promise<AxiosResponse> => {
        return this.patch(`${this.API_ROUTE}/post/${id}`,post);
    };

    deletePost = (id:string): Promise<AxiosResponse> => {
        return this.delete(`${this.API_ROUTE}/post/${id}`);
    };

    addPost = (post:any): Promise<AxiosResponse> => {
        return this.post(`${this.API_ROUTE}/post`,post);
    };

}