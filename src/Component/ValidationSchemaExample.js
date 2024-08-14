import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { event } from "jquery";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(" (Required*)"),
  email: Yup.string().email(" (Invalid email)").required(" (Required*)"),
  phone: Yup.string().required(" (Phone number is required*)"),
  subject: Yup.string().required(" (Subject is required*)"),
  message: Yup.string().required(" (Message is required*)"),
});

export const ValidationSchemaExample = () => {

  const [userData, setUserData] = useState({
    firstName:"",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  let name, value;
  const postData = (event) => {
    event.preventDefault()
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData, [name]: value});
  };

  const submitData = async (event) => {
    event.preventDefault()
    const {firstName, email, phone, subject, message} = userData;
    if(firstName && email && phone && subject && message){
    const res = await fetch("https://kiddo-ui-778a0-default-rtdb.firebaseio.com/userDataRecord.json",{method:"POST",headers: {
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      firstName,
      email,
      phone,
      subject,
      message,
    })
  }
);
  if(res){
    setUserData({
      firstName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Data Stored")
  }
}else{
  alert("please fill data")
}
  };  

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        // onSubmit={(values) => {
        //   // same shape as initial values
        //   alert("data submited");
        // }}
      >
        {({ errors, touched }) => (
          <Form className="form-light mt-20" role="form">
            {errors.firstName && touched.firstName ? (
              <div>Name {errors.firstName}</div>
            ) : null}
            <div className="form-group">
              <Field
                name="firstName"
                className="form-control"
                placeholder="Your Name"
                value={userData.firstName}
                onChange={postData}
              />
            </div>
            <Row>
              <Col md={6}>
                {errors.email && touched.email ? (
                  <div>Email Address {errors.email}</div>
                ) : null}
                <div className="form-group">
                  <Field
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={userData.email}
                    onChange={postData}
                  />
                </div>
              </Col>
              <Col md={6}>
                {errors.phone && touched.phone ? (
                  <div>Phone Number{errors.phone}</div>
                ) : null}
                <div className="form-group">
                  <Field
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={postData}
                  />
                </div>
              </Col>
            </Row>
            {errors.subject && touched.subject ? (
              <div>Subject {errors.subject}</div>
            ) : null}
            <div className="form-group">
              <Field
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={userData.subject}
                onChange={postData}
              />
            </div>

            {errors.message && touched.message ? (
              <div>Message {errors.message}</div>
            ) : null}
            <div className="form-group">
              <Field
                name="message"
                className="form-control"
                placeholder="Message"
                value={userData.message}
                onChange={postData}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="btn btn-two mt-4"
              onClick={submitData}
            >
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
