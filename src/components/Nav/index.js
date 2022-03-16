import React from 'react';

function Nav({selectedSection, setSelectedSection}) {
  return (
    <div>
      <header>
        <h1>
          <a href="">Shane McElrath</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a 
                href="#about-me" 
                className={selectedSection == 'AboutMe' && 'selected'} 
                onClick={() => setSelectedSection('AboutMe')}
              >About Me</a>
            </li>
            <li>
              <a 
                href="#portfolio"
                className={selectedSection == 'Portfolio' && 'selected'} 
                onClick={() => setSelectedSection('Portfolio')}
                >Portfolio</a>
            </li>
            <li>
              <a 
                href="#contact"
                className={selectedSection == 'Contact' && 'selected'} 
                onClick={() => setSelectedSection('Contact')}
                >Contact</a>
            </li>
            <li>
              <a 
                href="#resume"
                className={selectedSection == 'Resume' && 'selected'} 
                onClick={() => setSelectedSection('Resume')}
              >Resume</a>
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