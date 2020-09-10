import React from "react";
import bioImage from "../../img/about.jpg";

const AboutA = () => {
  return (
    <section id="about-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">About ME</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Let me tell you a little about myself and what I do...
        </p>
        <div className="about-info">
          <img src={bioImage} alt="about me" className="bio-image" />
          <div className="bio bg-light">
            <h4>Your Project Is In safe Hands</h4>
            <p>
              Hello! My name is Toni, and in the last ten years i have been
              developing websites, web aplications and mobile apps. I have a
              civil engineering degree, but my passion have always been in
              programming. Over the years i learnad a lot mostly building
              websites and scripts for my personal use. I have succesffuly
              turned my passion into business and have been earning enough for
              my perosanl needs. Now i want to expand my bussiness by helping
              other people get beautiful, functional and most most importantly
              secure websites. I am using modern programming languages such as
              Javascript ES6, HTML 5 , CSS 3, Bootstrap , React, Node.JS,
              Express.JS, MongoDB and many other. Feel free to contact me at any
              time and i will get back to you as soon as possible.
            </p>
          </div>

          <div className="award-1">
            <i className="fas fa-award fa-3x"></i>
            <h3>HTML & CSS Award</h3>
            <p>
              Course completion
              <a href="http://ude.my/UC-03865ac9-8f75-489f-8810-05b5472d7347">
                <strong> certificate </strong>
              </a>
              for "Modern JavaScript From The Beginning"
            </p>
          </div>
          <div className="award-2">
            <i className="fas fa-award fa-3x"></i>
            <h3>Javascript Award</h3>
            <p>
              Course completion
              <a href="http://ude.my/UC-fe96ff34-b8aa-43fc-bec8-440f06a15b37">
                <strong> certificate </strong>
              </a>
              for "Modern HTML & CSS From The Beginning (Including Sass)
            </p>
          </div>
          <div className="award-3">
            <i className="fas fa-award fa-3x"></i>
            <h3>React Award</h3>
            <p>
              Course completion{" "}
              <a href="/">
                <strong> certificate </strong>
              </a>{" "}
              for "React front to back"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutA;
