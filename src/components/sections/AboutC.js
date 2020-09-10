import React from "react";
import htmlImg from "../../img/about-logos/logo-html-css.png";
import jsReactImg from "../../img/about-logos/logo-javascript-react.png";
import nodeImg from "../../img/about-logos/logo-nodejs.png";
import mongoImg from "../../img/about-logos/logo-mongo.png";

const AboutC = () => {
  return (
    <section id="about-c" className="py-4 bg-light">
      <div className="container">
        <div className="about-logos">
          <img src={htmlImg} alt="html css bootstrap" />
          <img src={jsReactImg} alt="javascript" />
          <img src={nodeImg} alt="node.js" />
          <img src={mongoImg} alt="mongo db" />
        </div>
      </div>
    </section>
  );
};
export default AboutC;
