import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import {JWT_LOCALSTORAGE_KEY} from "../../../libs/utils/constants";
import './style.scss';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { createPostInitialValues } from "../../Posts/store/initialState";
import { getUserSelector } from "../../User/store/selectors";
import { createPost } from "../../Posts/store/actions";
import selectedPost from "../../Posts/store/reducers/selectedPost";
import { selectedPostSelector } from "../../Posts/store/selectors";
import { Link } from "react-router-dom";
import moment from "moment";


const PostInfo = () => {

    const dispatch = useDispatch()

    let token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

    const {post} = useSelector(selectedPostSelector)

    useEffect(() => {
        if(!token) token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
    }, [token]);

    if(post == undefined)
    window.location.href="/"
    return ( 
        <div className="post-page">
            <div className="back">
               <Link className="link" to="/">{'< Back'} </Link> 
            </div>
            <div>
                <span className='header'>{post.header}</span>
            </div>
            <div className="postInfo">
                <div className="img">
                    <img style = {{width:'100%',height:'100%'}}  className='img-post' placeholder={"img"} src={post.image?`${process.env.REACT_APP_API_HOST}/${post.image}`:''}/>                
                </div>
                <div className="userInfo">
                    <div>
                        Email: {post.email}
                    </div>
                    <div>
                        Contact face: {post.contact_face}
                    </div>
                    <div>
                        Phone: {post.phone}
                    </div>
                        
                </div>
            </div>
            <div className="descriptionblock">
            <div className="publicate">
                Publicate: {moment(post.created_at).format('MMMM Do YYYY, h:mm a')}
            </div>  
            <div className="description">
               <span className='title'>Description:</span> <br/>
                {post.description} 
            </div>
            
            </div>
        </div>
    );
}

export default PostInfo;