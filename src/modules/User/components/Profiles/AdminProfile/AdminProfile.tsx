import  React, {useEffect} from 'react';
import {Tabs} from 'antd';
import 'antd/dist/antd.css';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getUsersPosts } from '../../../../Posts/store/actions';
import UserList from './Tabs/UserList/UserList';
import PostsList from './Tabs/PostsList/PostsList';
import { fetchAllUsers } from '../../../store/actions';
import PersonalInfo from '../../PersonalInfo/PersonalInfo';
import CustomerPostsList from '../CustomerProfile/CustomerPostsList/CustomerPostsList';
import { getUserSelector } from '../../../store/selectors';


const { TabPane } = Tabs;

const Admin = () => {
  
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  
  useEffect(()=>{
    dispatch(fetchAllUsers(1))
    dispatch(getPosts(1))
    dispatch(getUsersPosts(user.id))
  },[])

  return(
    <div className="AdminPage">
      <br />
      <Tabs defaultActiveKey="1" tabPosition="left" >
        <TabPane tab="Users" key="1">
          <UserList/>
        </TabPane>
        <TabPane tab="Posts" key="2">
          <PostsList/>
        </TabPane>
        <TabPane tab="My posts" key="3">
          <CustomerPostsList/>
        </TabPane>
        <TabPane tab="Personal info" key="4">
          <PersonalInfo/>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Admin;