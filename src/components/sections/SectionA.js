import React from "react";
import Fade from "react-reveal/Fade";

const SectionA = () => {
  return (
    <section id="home-a" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">I specialize in</h2>

        <div className="bottom-line"></div>
        <p className="lead">
          Building websites that are beautiful, helpful and most most
          importantly secure.
        </p>
        <div className="specials">
          <Fade bottom cascade={true} fraction={0.5}>
            <div>
              <i className="fas fa-lightbulb fa-2x"></i>
              <h3>Idea</h3>
              <p>
                First step is getting idea from the customer. It helps if you
                can be clear with ideas and have some resources and examples of
                what you are trying to achieve.
              </p>
            </div>

            <div>
              <i className="fas fa-pencil-ruler fa-2x"></i>
              <h3>Design</h3>
              <p>
                In second step i try to visialize idea and get the best solution
                by drawing a design.
              </p>
            </div>
            <div>
              <i className="fas fa-code fa-2x"></i>
              <h3>Code</h3>
              <p>
                In this step i code the website with programming language that i
                found most suitable. Coding the complex websites can take many
                days but simple landing websites will be finished in hours.
              </p>
            </div>
            <div>
              <i className="fas fa-thumbs-up fa-2x"></i>
              <h3>Interaction</h3>
              <p>
                In the last step I present my work to customer to see if they
                like it and if any changes are needed. Only when customer is
                satisfied the process is over.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default SectionA;
