import React from 'react';

function Portfolio() {
  return (
    <section id="work">
      <h2>Work</h2>
      <div className="projects"> 
        <div className="first project">
          {/* hover transition layer */}
          <div className="color-shift">
            <div className="project-lable">
              <a href="https://eloncoin.herokuapp.com/">
                <h3>ElonCoin</h3>
                Node / HandleBars
              </a>
            </div>
            <div className="project-lable github">
              <a href="https://github.com/ShaneMcElrath/ElonCoin"><h3>Github</h3></a>
            </div>
          </div>
        </div>
        <div className="second project">
          {/* hover transition layer */}
          <div className="color-shift">
            <div className="project-lable">
              <a href="https://shanemcelrath.github.io/run-buddy/">
                <h3>Run Buddy</h3>
                HTML / CSS
              </a>
            </div>
            <div className="project-lable github">
              <a href="https://github.com/ShaneMcElrath/run-buddy"><h3>Github</h3></a>
            </div>
          </div>
        </div>
        <div className="third project">
          {/* hover transition layer */}
          <div className="color-shift">
            <div className="project-lable">
              <a href="https://rebeccadherrera.github.io/shellter/">
                <h3>Shellter</h3>
                HTML / Javascript / CSS
              </a>
            </div>
            <div className="project-lable github">
              <a href="https://github.com/rebeccadherrera/shellter"><h3>Github</h3></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;