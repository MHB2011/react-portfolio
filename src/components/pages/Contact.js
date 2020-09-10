import React, { Fragment } from "react";
import HeaderInner from "../headers/HeaderInner";
import Footer from "../layout/Footer";
import ContactA from "../sections/ContactA";
import ContactC from "../sections/ContactC";

const Contact = () => {
  return (
    <Fragment>
      <HeaderInner />
      <ContactA />
      <ContactC />
      <Footer />
    </Fragment>
  );
};

export default Contact;
