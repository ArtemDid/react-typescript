import React from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../../../../modules/Auth/store/actions/logoutActions";
import {getUserSelector} from "../../../../../modules/User/store/selectors";
import './style.scss';
import { AuthService } from "../../../../../modules/Auth/services";
import { JWT_LOCALSTORAGE_KEY } from "../../../../utils/constants";


const authService =  AuthService.getInstance()

const Header = () => {

    const dispatch = useDispatch();

    let token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

    const user = useSelector(getUserSelector);

    const clickHandler = () =>{
        if(!token){
            window.location.href = `${authService.APP_URL}/login`;
        }
    }

    return (
        <div className="header main">
            <div className = 'siteName'>
                <Link to={"/"} className="link">
                   Lost&Found
                </Link>
            </div>
            <div className="main">
                <div className='ad'>
                    <Link to={"/advertisement"} onClick={clickHandler} className="link">
                       <span> Place an advertisement</span>
                    </Link>
                </div> 
                {!user.id &&
                    <div className='right'>
                        <Link to={"/registration"} className="link">
                            SignUp
                        </Link>
                        <Link to={"/login"} className="link">
                            SignIn
                        </Link>
                    </div>
                }
                {user.id &&
                    <div className='right'>
                        <div >
                            <Link to={"/profile"} className="link">
                                My profile
                            </Link>
                        </div>
                    </div>

                }
            </div>
        </div>
    );
  }
export default Header;