import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {cleanLoginErrors, registerUser} from "../../store/actions";
import {registrationInitialValues} from "../../store/initialState";
import {phoneRegExp} from "../../../../utils/validations";
import {RegistrationFormValues} from "../../store/types";
import '../style.scss';
import {signUpErrorsSelector} from "../../store/selectors";
import ErrorPopup from "../../../../libs/ui/components/modals/ErrorPopup";

const required = 'This field is required';

const RegisterValidationSchema = () =>
    Yup.object({
        email: Yup.string().email().required(required).label('Email'),
        name: Yup.string().min(2).max(100).required(required).label('Nick name'),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').label('Phone'),
        password: Yup.string().min(8)
            .matches(/^(?=.*[a-zA-Z]).+$/, 'Password must contain at least 1 alphabetic character')
            .matches(/\d/, 'Password must contain at least 1 number')
            .label('Password'),
        password_confirmation: Yup.string().min(8)
            .oneOf([Yup.ref('password'), null], 'Passwords don`t match')
            .label('Password confirmation'),
    });

const SignUp = () => {

    const dispatch = useDispatch();

    const errors = useSelector(signUpErrorsSelector);



    const submitHandle = (values: RegistrationFormValues) => {

        console.log(errors)
        dispatch(registerUser(values));
    };

    return (
        
        <div className = "signUp">
            <h1>Let's get started</h1>
            <p className="mb-3">Register to Lost&Found!</p>

            <Formik
                initialValues={registrationInitialValues}
                validationSchema={RegisterValidationSchema()}
                onSubmit={submitHandle}>{() => (
                    <Form className="form">
                        <div className="mb-1">
                            <span>What's your Name?</span>
                            <Field
                                name="name"
                                placeholder="First name"
                                type="text"
                                className="input"
                            />
                            <ErrorMessage name="first_name" component="div" className="error-message"/>
                        </div>

                        <div className="mb-1">
                            <span>What's your Email?</span>
                            <Field
                                name="email"
                                placeholder="Email"
                                type="email"
                                className="input"
                            />
                            <ErrorMessage name="email" component="div" className="error-message"/>
                        </div>

                        <div className="mb-1">
                            <span>What's your phone?</span>
                            <Field
                                name="phone"
                                placeholder="Phone"
                                type="phone"
                                className="input"
                            />
                            <ErrorMessage name="phone" component="div" className="error-message"/>
                        </div>

                        <div className="mb-1">
                            <span>Enter your password</span>
                            <Field
                                name="password"
                                placeholder="Password"
                                type="password"
                                className="input"
                            />
                            <ErrorMessage name="password" component="div" className="error-message"/>
                        </div>

                        <div className="mb-1">
                            <span>Confirm your password</span>
                            <Field
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                type="password"
                                className="input"
                            />
                            <ErrorMessage name="password_confirmation" component="div" className="error-message"/>
                        </div>

                        <button type="submit" className="submit">
                            <span>Register</span>
                        </button>
                    </Form>
                )}
            </Formik>
            
            <ErrorPopup 
                errors = {errors}
                clean = {cleanLoginErrors}
            />
        </div>
    );
}

export default SignUp;
  