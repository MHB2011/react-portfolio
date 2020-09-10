import React from "react";

const SectionC = () => {
  return (
    <section id="home-c" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">What I offer</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Here is the list of work i can do for you as well as prices.
        </p>
        <div className="process">
          <div>
            <i className="fas fa-file-alt fa-4x process-icon my.2">
              <div className="process-step">1</div>
            </i>
            <h3>Landing page</h3>
            <p>
              Simple but beautiful landing pages for companys and individuals.
            </p>
          </div>
          <div>
            <i className="fas fa-server fa-4x process-icon my.2">
              <div className="process-step">2</div>
            </i>
            <h3>Complex website</h3>
            <p>Websites that involve doing work with databases.</p>
          </div>
          <div>
            <i className="fas fa-mobile-alt fa-4x process-icon my.2">
              <div className="process-step">3</div>
            </i>
            <h3>Mobile App</h3>
            <p>
              Native mobile apps working on both android and iOS. Fast and
              responsive.
            </p>
          </div>
          <div>
            <i className="fas fa-sticky-note fa-4x process-icon my.2">
              <div className="process-step">4</div>
            </i>
            <h3>Other</h3>
            <p>Things such as custom scripts or trading indicators.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionC;
