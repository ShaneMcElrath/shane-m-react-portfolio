import React from 'react';

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About<br/>Me</h2>
      <div>
        <img
          src={require('../../assets/Profile/ProfileMe.JPEG')}
          alt="Shane McElrath"
        />
        <p>
          My name is Shane, and this website is my digital portfolio.  
          My passion is for software development with experience programming HTML5, CSS3, JavaScript, Node, React, SQL, and MongoDB.  
          Software development is about the mashing up of problem solving, creativity, and being agile in your pursuit of amazing web solutions.
          I deliver quality programming solutions and strive to produce quality work with positive client relationship building.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;