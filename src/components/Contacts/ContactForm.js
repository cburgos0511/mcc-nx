import React, { useState, useEffect } from "react";
import s from "./form.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => {
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [failMessageOpen, setFailMessageOpenOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setThankYouOpen(false);
    }, 5000);
  }, [thankYouOpen]);

  useEffect(() => {
    setTimeout(() => {
      setFailMessageOpenOpen(false);
    }, 5000);
  }, [failMessageOpen]);
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  return (
    <div className={s.container}>
      <h1 className={s.title}>Leave us a message</h1>
      <Formik
        validate={(values) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if (!values.name) {
            errors.name = "Name Required";
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required";
          }
          if (!values.message) {
            errors.message = "Message Required";
          }
          return errors;
        }}
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": "contact-demo",
              ...values,
            }),
          })
            .then(() => {
              setThankYouOpen(true);
              actions.resetForm();
            })
            .catch(() => {
              setFailMessageOpenOpen(true);
            })
            .finally(() => actions.setSubmitting(false));
        }}
      >
        {() => (
          <Form name="mcc-contact-form" data-netlify={true}>
            <div className={s.form__wrap} style={{ height: "92px" }}>
              <label htmlFor="name">Name </label>
              <Field name="name" />
              <ErrorMessage
                name="name"
                render={(msg) => <span className={s.error}>* {msg}</span>}
              />
            </div>

            <div className={s.form__wrap} style={{ height: "92px" }}>
              <label htmlFor="email">Email </label>
              <Field name="email" />
              <ErrorMessage
                name="email"
                render={(msg) => <span className={s.error}>* {msg}</span>}
              />
            </div>

            <div className={s.form__wrap} style={{ height: "340px" }}>
              <label htmlFor="message">Message </label>
              <Field name="message" component="textarea" rows={16} />
              <ErrorMessage
                name="message"
                render={(msg) => <span className={s.error}>* {msg}</span>}
              />
            </div>

            <button className={s.button} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
      {thankYouOpen && (
        <div className={s.thankyou}>
          <p>Thank you for your message. It has been sent.</p>
        </div>
      )}
      {failMessageOpen && (
        <div className={s.failMessage}>
          <p>Something went wrong. Try again later.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
