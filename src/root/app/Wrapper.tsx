import React, { useEffect } from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import MainPage from '../../modules/pages/MainPage/MainPage';
import Profile from '../../modules/User/components/Profiles/Profile';
import SignIn from "../../modules/Auth/components/SignIn/SignIn";
import SignUp from "../../modules/Auth/components/SignUp/SignUp";
import { getUserSelector } from "../../modules/User/store/selectors";
import {JWT_LOCALSTORAGE_KEY} from "../../libs/utils/constants";
import {getUser} from "../../modules/User/store/actions";
import './style.scss';
import AdvertisementPage from "../../modules/pages/Advertisement/AdvertisementPage";
import PostInfo from "../../modules/pages/PostInfo/PostInfo";

const Wrapper = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
        if (token) {
            dispatch(getUser());
        }
    }, [dispatch]);

    const user = useSelector(getUserSelector);

    return (
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/advertisement" component={AdvertisementPage} />
                    <Route exact path="/profile" component={ Profile } />
                    <Route exact path="/post" component={PostInfo} />
                    {!user.id &&
                    <Switch>
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/registration" component={SignUp} />
                    </Switch>
                    }
                    <Redirect to="/" />
                </Switch>
            </div>
    );
}
  
export default Wrapper;
