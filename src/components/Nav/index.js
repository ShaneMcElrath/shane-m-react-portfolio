import React from 'react';

function Nav() {
  return (
    <div>
      <header>
        <h1>
          <a href="">Shane McElrath</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="hero">
        <div>Web Developer</div>
      </div>
    </div>
  );
}

export default Nav;