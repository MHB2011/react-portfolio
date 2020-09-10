import React, { Fragment } from "react";
import HeaderInner from "../headers/HeaderInner";
import AboutA from "../sections/AboutA";
import AboutB from "../sections/AboutB";
import AboutC from "../sections/AboutC";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <Fragment>
      <HeaderInner />
      <AboutA />
      <AboutB />
      <AboutC />
      <Footer />
    </Fragment>
  );
};

export default About;
