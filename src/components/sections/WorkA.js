import React from "react";
import item1 from "../../img/items/item1.png";
import item10 from "../../img/items/item10.png";
import item12 from "../../img/items/item12.png";
import item11 from "../../img/items/item11.png";
import item14 from "../../img/items/item14.png";

const WorkA = () => {
  return (
    <section id="work-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="bottom-line"></div>
        <p className="lead">Checkout some of my projects...</p>
        <div className="items">
          <div className="item">
            <div className="item-image">
              <img src={item1} alt="V.A.L Gradnja" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <p className="item-text-category">Landing Page</p>
                <a href="http://valgradnja.hr" target="_blank">
                  <h2 className="item-text-title">V.A.L Gradnja</h2>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={item10} alt="ProfitFinder" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <p className="item-text-category">Finance</p>
                <p className="locked">
                  Private Project <i className="fas fa-lock"></i>
                </p>
                <p>Code available on request</p>
                <h2 className="item-text-title">Market Tools</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={item12} alt="VVM Autoservis" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <p className="item-text-category">React</p>
                <a
                  href="https://vvm7687687.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="item-text-title">VVM Autoservis</h2>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={item11} alt="Github Finder" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <p className="item-text-category">React</p>
                <a
                  href="https://githubfinder68767.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="item-text-title">GitHub Finder</h2>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={item14} alt="Gym Booker" />
            </div>
            <div className="item-text">
              <div className="item-text-wrap">
                <p className="item-text-category">
                  MongoDB Express.js React Node.js
                </p>
                <p>Email: demo-mhb@gmail.com & Password: demodemo</p>
                <a
                  href="https://powerful-inlet-87484.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="item-text-title">Gym Booker</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkA;
