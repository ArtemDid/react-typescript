import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "antd/lib/modal/Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import './style.scss';
import { Select, TimePicker } from "antd";
import moment from "moment";
import { selectedPostSelector } from "../../../../../../Posts/store/selectors";
import { updatePost } from "../../../../../../Posts/store/actions";
const { Option } = Select;


const UpdateProduct = ({modalUpdateActive, setModalUpdateActive, PostValidationSchema}:any) => {
    
    const dispatch = useDispatch();
    const {post} = useSelector(selectedPostSelector);

    const submitHandle = (values:any) => { 

        values.created_at = undefined
        let payload = {
          data: values, 
          id:values.id,
        };
        dispatch(updatePost(payload));
        setModalUpdateActive(false);
    };
    
    return (
        <div className = "UpdatePost">
             <Modal destroyOnClose = {true} title="Update post" visible={modalUpdateActive} footer ={""} onCancel={() => setModalUpdateActive(false)}>
                 <Formik 
                    initialValues={post}
                    onSubmit={submitHandle} 
                    validationSchema={PostValidationSchema}
                    >
                    {(formProps) => (
                        <Form className="form">
                            <div className="block">
                            <div className="headerProd">
                                <span>Header:</span>
                                <Field
                                    name="header"
                                    type="text"
                                    className="input"
                                />
                                <ErrorMessage name="header" component="div" className="error-message"/>
                            </div>

                            <div className="description">
                                <span>Description:</span>
                                <Field
                                    style={{height:'100px'}}
                                    name="description"
                                    as="textarea"
                                    className="input"
                                />
                                <ErrorMessage name="description" component="div" className="error-message"/>
                            </div>

                            <div className="headerProd">
                                <span>Image:</span>
                                <input
                                    name="image"
                                    className="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={(event:any)=>{
                                        formProps.setFieldValue('image',event.target.files[0])
                                    }}
                                />
                                <ErrorMessage name="description" component="div" className="error-message"/>
                            </div>
                        </div>
                        <div className="block">
                            <h3>Contact information</h3>
                            <div className="headerProd">
                                <span>City:</span>
                                <Field
                                    name="place"
                                    type="text"
                                    className="input"
                                />
                                <ErrorMessage name="place" component="div" className="error-message"/>
                            </div>
                            <div className="headerProd">
                                <span>Contact face:</span>
                                <Field
                                    name="contact_face"
                                    type="text"
                                    className="input"
                                />
                                <ErrorMessage name="contact_face" component="div" className="error-message"/>
                            </div>
                            <div className="headerProd">
                                <span>Email:</span>
                                <Field
                                    name="email"
                                    disabled
                                    className="input"
                                    type="text"
                                />
                                <ErrorMessage name="email" component="div" className="error-message"/>
                            </div>
                            <div className="headerProd">
                                <span>Phone number:</span>
                                <Field
                                    name="phone"
                                    className="input"
                                    type="text"
                                />
                                <ErrorMessage name="phone" component="div" className="error-message"/>
                            </div>
                        </div>

                
                            <div className="btn-sbmt">
                                <button type="submit" className="submit">
                                    Update
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    )
};

export default UpdateProduct;