import React from 'react';

function Portfolio() {
  return (
    <section id="work">
      <h2>Work</h2>
      <div class="projects"> 
        <div class="run-buddy project">
          <a href="https://eloncoin.herokuapp.com/">
            {/* hover transition layer */}
            <div class="color-shift"></div>
          </a>
          <div class="project-lable">
            <h3>ElonCoin</h3>
            Node / HandleBars
          </div>
        </div>
        <div class="robot-gladiators project">
          <a href="https://shanemcelrath.github.io/run-buddy/">
            {/* hover transition layer */}
            <div class="color-shift"></div>
          </a>
          <div class="project-lable">
            <h3>Run Buddy</h3>
            HTML / CSS
          </div>
        </div>
        <div class="coming-soon project">
          <a href="https://rebeccadherrera.github.io/shellter/">
            {/* hover transition layer */}
            <div class="color-shift"></div>
          </a>
          <div class="project-lable">
            <h3>Shellter</h3>
            HTML / Javascript / CSS
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;