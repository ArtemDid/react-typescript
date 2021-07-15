import React from "react";
import { useSelector } from "react-redux";
import { getUserSelector } from "../../store/selectors";
import CustomerProfile from './CustomerProfile/CustomerProfile'
import AdminProfile from "./AdminProfile/AdminProfile";

const Profile = () => {

  const user = useSelector(getUserSelector);

  return (
    <div className = "Profile">
      {user.role === 'Customer' &&
        <CustomerProfile />
      }
      {user.role === 'Admin' &&
        <AdminProfile />
      }
    </div>
  );
};

export default Profile;