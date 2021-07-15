import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { changePasswordInitialValues } from "../../store/initialState";
import { getUserSelector } from "../../store/selectors";
import { updateUserPassword } from "../../store/actions";
import { required } from "../../../pages/Advertisement/AdvertisementPage";



const ChangePassword = ({setModalPass}: any) => {

    const dispatch = useDispatch();
    const {id} = useSelector(getUserSelector);

    
    const passValidationSchema = () => {
        return Yup.object({
            old_password: Yup.string().required(required).label('Old password'),
            password: Yup.string()
            .matches(/^(?=.*[a-zA-Z]).+$/, 'Password must contain at least 1 alphabetic character')
            .matches(/\d/, 'Password must contain at least 1 number')
            .required(required).label('Password'),
            password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords don`t match')
            .matches(/^(?=.*[a-zA-Z]).+$/, 'Password must contain at least 1 alphabetic character')
            .matches(/\d/, 'Password must contain at least 1 number')
            .required(required).label('Password confirmation')
      });
    }

    const submitHandle = (values: any) => {

        const data = {
            id: id,
            old_password: values.old_password,
            password: values.password,
            password_confirmation: values.password_confirmation
        }

        dispatch(updateUserPassword(data))
        setModalPass(false)
    }
  
    return (
        <div className="ChangePassword">
        <Formik 
            initialValues={changePasswordInitialValues}
            validationSchema={passValidationSchema()}
            onSubmit={submitHandle}>
            {() => (
            <Form className="form">
                <div className="mb-1">
                <span>Password:</span>
                <Field
                    name="old_password"
                    type="password"
                    className="input"
                />
                <ErrorMessage name="old_password" component="div" className="error-message"/>
                </div>

                <div className="mb-1">
                    <span>New password:</span>
                    <Field
                    name="password"
                    type="password"
                    className="input"
                    />
                    <ErrorMessage name="password" component="div" className="error-message"/>
                </div>

                <div className="mb-1">
                    <span>Confirm new password:</span>
                    <Field
                    name="password_confirmation"
                    type="password"
                    className="input"
                    />
                    <ErrorMessage name="password_confirmation" component="div" className="error-message"/>
                </div>

                <button type="submit" className="submit">
                    <span>Update password</span>
                </button>

            </Form>
            )}
        </Formik>
        </div >

        
    );
}

export default ChangePassword;