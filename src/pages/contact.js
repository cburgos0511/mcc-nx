import React from "react";
import Head from "next/head";
import Header from "../components/Contacts/Header";
import Map from "../components/Contacts/Map";
import ContactForm from "../components/Contacts/ContactForm";
import s from "../components/Contacts/contact.module.scss";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <div className={s.contactContainer}>
        <Map />
        <ContactForm />
      </div>
    </>
  );
};

export default contact;
