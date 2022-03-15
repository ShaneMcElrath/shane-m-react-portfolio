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
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
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