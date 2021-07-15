import React, { useEffect } from "react";
import './style.scss';
import PersonalInfo from "../../PersonalInfo/PersonalInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserSelector } from "../../../store/selectors";
import { Tabs } from "antd";
import CustomerPostsList from "./CustomerPostsList/CustomerPostsList";
import { getUsersPosts } from "../../../../Posts/store/actions";

const { TabPane } = Tabs;

const CustomerProfile = () => {
  
  const user = useSelector(getUserSelector);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUsersPosts(user.id))
  },[])

  return (
    <div className="profile">
       <Tabs defaultActiveKey="1" tabPosition="left" >
        <TabPane tab="Posts" key="1">
          <CustomerPostsList/>
        </TabPane>
        <TabPane tab="Personal info" key="2">
          <PersonalInfo/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default CustomerProfile;


