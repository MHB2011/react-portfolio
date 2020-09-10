import React from "react";

const AboutB = () => {
  return (
    <section id="about-b" className="bg-dark py-3">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line"></div>
        <h4>Backend:</h4>
        <div className="progress">
          <div style={{ width: "80%" }}></div>
        </div>
        <h4>Frontend:</h4>
        <div className="progress">
          <div style={{ width: "85%" }}></div>
        </div>
        <h4>PHP:</h4>
        <div className="progress">
          <div style={{ width: "80%" }}></div>
        </div>
        <h4>Javascript:</h4>
        <div className="progress">
          <div style={{ width: "98%" }}></div>
        </div>
        <h4>Express.JS:</h4>
        <div className="progress">
          <div style={{ width: "90%" }}></div>
        </div>
        <h4>HTML & CSS:</h4>
        <div className="progress">
          <div style={{ width: "100%" }}></div>
        </div>
        <h4>React.js:</h4>
        <div className="progress">
          <div style={{ width: "85%" }}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutB;
