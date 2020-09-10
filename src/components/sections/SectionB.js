import React from "react";
import Fade from "react-reveal/Fade";

const SectionB = () => {
  return (
    <section id="home-b" className="text-center py-2">
      <div className="stats">
        <Fade bottom cascade={true} fraction={0.9}>
          <div>
            <ul>
              <li>
                <i className="fas fa-users fa-3x"></i>
              </li>
              <li className="stats-title">Clients</li>
              <li className="stats-number">100</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-award fa-3x"></i>
              </li>
              <li className="stats-title">Awards</li>
              <li className="stats-number">3</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-hourglass-start fa-3x"></i>
              </li>
              <li className="stats-title">Hours Worked</li>
              <li className="stats-number">10000+</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-code-branch fa-3x"></i>
              </li>
              <li className="stats-title">Projects Compledted</li>
              <li className="stats-number">135</li>
            </ul>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default SectionB;
