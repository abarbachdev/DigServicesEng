import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactUs = () => {
    
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here, e.g., send data to backend or perform actions
    console.log(values);

    // Reset form after submission
    resetForm();
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.message) {
      errors.message = 'Required';
    }

    return errors;
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
