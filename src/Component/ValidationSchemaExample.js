import React from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(' (Required*)'),
  email: Yup.string().email(' (Invalid email)').required(' (Required*)'),
  phone: Yup.string().required(' (Phone number is required*)'),
  subject: Yup.string().required(' (Subject is required*)'),
  message: Yup.string().required(' (Message is required*)'),
});

export const ValidationSchemaExample = () => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="form-light mt-20" role="form">
          {errors.firstName && touched.firstName ? (
            <div>Name {errors.firstName}</div>
          ) : null}
          <div className="form-group">
            <Field name="firstName" className="form-control" placeholder="Your Name" />
          </div>
          <Row>
            <Col md={6}>
              {errors.email && touched.email ? (
                <div>Email Address {errors.email}</div>
              ) : null} 
              <div className='form-group'>
                <Field name="email" className="form-control" placeholder="Email Address" />
              </div>
            </Col>
            <Col md={6}>
              {errors.phone && touched.phone ? <div>Phone Number{errors.phone}</div> : null}
              <div className='form-group'>
                <Field name="phone" className="form-control" placeholder="Phone Number" />
              </div>
            </Col>
          </Row>
          {errors.subject && touched.subject ? <div>Subject {errors.subject}</div> : null}
          <div className='form-group'>
              <Field name="subject" className="form-control" placeholder="Subject" />
          </div>

          {errors.message && touched.message ? <div>Message {errors.message}</div> : null}
          <div className='form-group'>
            <Field name="message" className="form-control" placeholder="Message" />
          </div>

          <Button type="submit" variant="primary" className="btn btn-two mt-4">Send Message</Button>
        </Form>
      )}
    </Formik>
  </div>
);