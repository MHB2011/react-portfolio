import React from "react";
import Navbar from "../layout/Navbar";
import Typewriter from "typewriter-effect";

import Fade from "react-reveal/Fade";

const HeaderHome = () => {
  return (
    <header id="header-home">
      <div className="container">
        <Navbar />
        <div className="header-content">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Javascript is awesome !")
                  .callFunction(() => {})
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {})
                  .start();
              }}
              options={{
                strings: [
                  "I Am Toni The Web Developer",
                  "I Love Building Custom Web Sites",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <Fade bottom delay={2000}>
            <p className="lead text-bold">
              <strong>
                I specialize in building custom websites and web tools.
              </strong>
            </p>
          </Fade>
          <a href="work.html" className="btn-light">
            View My Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
