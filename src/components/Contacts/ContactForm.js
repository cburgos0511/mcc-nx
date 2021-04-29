import React, { useState, useEffect, useRef } from "react";
import s from "./form.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { gsap } from "gsap";

const show = (elem1) => {
  gsap.fromTo(elem1, {
    duration: 0.7,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2,
    },
  });
};

const hide = (elem1) => {
  gsap.fromTo(elem1, {
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
  });
};
const ContactForm = () => {
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [failMessageOpen, setFailMessageOpenOpen] = useState(false);
  const thanksYouElement = useRef();
  const formElement = useRef();

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

  const [messageSuccessTL] = useState(
    gsap.timeline({
      paused: true,
      defaults: { duration: 2, ease: "expo.out" },
    })
  );

  useEffect(() => {
    if (thankYouOpen) {
      messageSuccessTL
        .fromTo(
          formElement.current,
          { opacity: 1 },
          { opacity: 0, duration: 1 },
          "+=1"
        )
        .fromTo(
          thanksYouElement.current,
          { autoAlpha: 1, y: 48 },
          { autoAlpha: 0, y: 0 },
          "+=1"
        );
    }
  });
  return (
    <div className={s.container}>
      {thankYouOpen ? (
        <div ref={thanksYouElement} className={s.thankyou}>
          <h1>Thanks for the message. We'll respond as soon as possible.</h1>
        </div>
      ) : (
        <div ref={formElement}>
          {failMessageOpen && (
            <div className={s.failMessage}>
              <p>Something went wrong. Try again later.</p>
            </div>
          )}
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
        </div>
      )}
    </div>
  );
};

export default ContactForm;
