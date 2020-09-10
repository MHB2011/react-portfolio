import React, { Fragment } from "react";
import HeaderHome from "../headers/HeaderHome";
import SectionA from "../sections/SectionA";
import SectionB from "../sections/SectionB";
import SectionC from "../sections/SectionC";
import Footer from "../layout/Footer";
//import typewriter from '../../js/typewriter'

const Home = () => {
  return (
    <Fragment>
      <HeaderHome />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </Fragment>
  );
};

export default Home;
