import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import {JWT_LOCALSTORAGE_KEY} from "../../../libs/utils/constants";
import './style.scss';
import { Input, Pagination } from "antd";
import { getPosts, searchPosts, selectPost } from "../../Posts/store/actions";
import { fetchPostsSelector, PostPages } from "../../Posts/store/selectors";
import moment from "moment";
import { Link } from "react-router-dom";

const MainPage = () => {

    const dispatch = useDispatch();

    const posts = useSelector(fetchPostsSelector);
    const pages = useSelector(PostPages)

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [search,setSearch] = useState<string>('');

    useEffect(() => {
        dispatch(getPosts(1))
    }, []);

    const onchange = (e:any)=>{
        document.documentElement.scrollTop = 0;
        if(search == ''){
            dispatch(getPosts(e))
        }
        else{
            let obj = {
                page:e,
                search:search
            }
            dispatch(searchPosts(obj))
        }

        setCurrentPage(e)
   }

   const onClickHandle = (item:any) =>{
       dispatch(selectPost(item))
   }

   const onChange = (e:any)=>{
       let obj = {
           page:currentPage,
           search:e.target.value
       }
       setSearch(e.target.value)
    dispatch(searchPosts(obj))
   }

    return (
        <div className="main-page">
            <Input  placeholder={"Search"} style={{marginBottom:20,display:'flex'}} onChange={onChange}/>
            {
                posts.list.map((item,key)=>{
                    return(
                        <div className="post" key={key} onClick={()=>onClickHandle(item)}>
                            <div className="image">
                                <img style={{width:250,height:'100%',display:'flex'}} className='img-product' placeholder={"img"} src={item.image?`${process.env.REACT_APP_API_HOST}/${item.image}`:''}/>
                            </div>
                            <div className='content'>
                                <div className='head'>
                                    <Link className="link" to='/post'> {item.header}</Link> 
                                </div>
                                <div className='location'>
                                    {item.place} - {moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Pagination        
                onChange={onchange}
                total={pages*10}           
            />
        </div>
    );
}

export default MainPage;