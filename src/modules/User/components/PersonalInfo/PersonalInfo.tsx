import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from 'yup';

import {getUserSelector} from "../../store/selectors";
import {updateUserInfo} from "../../store/actions";
import {phoneRegExp} from "../../../../utils/validations";
import ModalForm from "../../../../libs/ui/components/modals/Modal";
import ChangePassword from "../ChangePassword/ChangePassword";
import './style.scss';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { logoutUser } from "../../../Auth/store/actions/logoutActions";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  const [modalPass, setModalPass] = useState<boolean>(false)
  const required = 'This field is required';

  const logoutHandle = () => {
    dispatch(logoutUser());
}

  const ProfileValidationSchema = () => {
    return Yup.object({
      email: Yup.string().email().required(required).label('Email'),
      name: Yup.string().min(2).max(25).required(required).label('Nick name'),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').label('Phone'),
    });
  };

  const submitHandle = (values: any) => {

    const form = {
      email: values.email,
      name: values.name,
      id: values.id,
      contact_face:values.contact_face,
      location: values.location,
      phone: values.phone
    }

    dispatch(updateUserInfo(form));
  }
  
  return (
    <div className="personal-info">
      <div className ="head">
        <div className="title mb-1">
          Personal Info:
        </div>
        <Link to={"#"} onClick={logoutHandle} className="link">
          LogOut
        </Link>
      </div>

      <Formik 
        initialValues={user}
        validationSchema={ProfileValidationSchema()}
        onSubmit={submitHandle}>
        {() => (
          <Form className="form">
            <div className="mb-1">
              <span>Nick Name:</span>
              <Field
                  name="name"
                  type="text"
                  className="input"
              />
              <ErrorMessage name="name" component="div" className="error-message"/>
            </div>

            <div className="mb-1">
                <span>Email:</span>
                <Field
                  name="email"
                  type="text"
                  className="input"
                />
                <ErrorMessage name="email" component="div" className="error-message"/>
            </div>

            <div className="mb-1">
                <span>Phone:</span>
                <Field
                  name="phone"
                  type="text"
                  className="input"
                />
                <ErrorMessage name="phone" component="div" className="error-message"/>
            </div>
            
            <div className="mb-1">
                <span>Address:</span>
                <Field
                  name="location"
                  type="text"
                  className="input"
                />
                <ErrorMessage name="location" component="div" className="error-message"/>
            </div>
                        
            <div className="mb-1">
                <span>Contact Face:</span>
                <Field
                  name="contact_face"
                  type="text"
                  className="input"
                />
                <ErrorMessage name="contact_face" component="div" className="error-message"/>
            </div>

            <button type="submit" className='submit'>
                Update
            </button>

          </Form>
        )}
      </Formik>

      <div className="change-password" onClick={()=>setModalPass(true)}>Change Password</div>
      <ModalForm titleModal={'Change Password'} active={modalPass} setActive={setModalPass}>
          <ChangePassword  
            setModalPass={setModalPass}
          />
      </ModalForm>
    </div >
  );
}

export default PersonalInfo ;