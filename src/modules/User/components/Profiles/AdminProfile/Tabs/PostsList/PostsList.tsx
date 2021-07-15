import React, { useState } from 'react'
import { Button, Input, Pagination, Select, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import {  deletePost, getPosts} from "../../../../../../Posts/store/actions";
import './style.scss';
import moment from 'moment';
import { fetchPostsSelector, PostPages } from '../../../../../../Posts/store/selectors';

const { Option } = Select;

const PostsList = ()=>{

  const dispatch = useDispatch();

  const {list} = useSelector(fetchPostsSelector);
  const [searchValue, setSearchValue] = useState<string>('');
  const pages = useSelector(PostPages);

  let filteredList = list;

  if(list.length > 0){
    filteredList = list.filter((post) => post.header === searchValue 
    || post.last_name === searchValue

    );
  }
  let columns = [
    {
      title: 'Header',
      dataIndex: 'header',
      editable: true,
      className: 'table-column-1'
    },
    {
      title: 'Description',
      dataIndex: 'description',
     
      render: (_: any, record:any) =>
      list.length >= 1 ? (
        <div className= 'table-column-2'>
          {record.description}
        </div>
    ) : null,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      editable: true,
      className: 'table-column-1'
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      editable: true,
      className: 'table-column-1'
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (_: any, record:any) =>
      list.length >= 1 ? (
        record.image !== undefined && record.image !== '' &&
        <div  style={{textAlign:'center'}}>
          <img style={{width:100,height:100}} className='img-product' src={`${process.env.REACT_APP_API_HOST}/${record.image}`}/>
          </div>
    ) : null,
    },
    {
      title: 'Place',
      dataIndex: 'place',
      className: 'table-column-4'
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      className: 'table-column-3',
      render: (_: any, record:any) =>
      list.length >= 1 ? (
          <div>
            {
              moment(record.created_at).format('MMMM Do YYYY')
            }
          </div>
      ) : null,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      className: 'table-column-5',
      render: (_: any, record:any) =>
      list.length >= 1 ? (
          <div>
            <Button type="primary" className="operation-btn" danger onClick={()=>dispatch(deletePost(record.id))} >Delete</Button>
          </div>
      ) : null,
      },
  ];
  
  const onchange = (e:any)=>{
    dispatch(getPosts(e))
  }
  
  return(
    <div className="PostList">
      <Table
        rowClassName={() => 'editable-row'}
        dataSource={searchValue ? filteredList : list}
        columns={columns}
        rowKey='id'
        pagination={false}
      />
      <Pagination
        onChange={onchange}
        total={pages*10}
      />
    </div>
  )
}

export default PostsList