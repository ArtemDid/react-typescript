import React from "react";
import {useDispatch} from "react-redux";
import './style.scss';

const ErrorPopup = ({errors, clean}: any) => {
    const dispatch = useDispatch();

    const cleanErrors = () => {
        dispatch(clean());
    }

    const renderError = () => {
        if (errors.length) {
            setTimeout(cleanErrors, 3000);
console.log( errors[0])
            return (
                <div className="error-container" onClick={cleanErrors}>
                    <i className="fa fa-exclamation-circle"></i>
                    <span>{ errors[0] }</span>
                    <i className="fa fa-times"></i>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    return(
        <div>{renderError()}</div>
    );
}

export default ErrorPopup;