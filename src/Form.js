import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { Row, Col, Button } from 'react-bootstrap';

// Firebase configuration (replace with your own config from Firebase Console)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Form validation schema
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const MyForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Add a new document with a generated ID
      await addDoc(collection(db, "messages"), values);
      console.log("Document successfully written!");
      resetForm(); // Optionally reset the form after submission
    } catch (error) {
      console.error("Error writing document: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
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

          <Button type="submit" variant="primary" id='btn' className="btn btn-two mt-4">Send Message</Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
