import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {

  const [selectedSection, setSelectedSection] = useState('AboutMe');

  return (
    <div>
      <Nav 
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      ></Nav>
      <main>
        {selectedSection == 'AboutMe' ? (<AboutMe/>):('')}
        {selectedSection == 'Portfolio' ? (<Portfolio/>):('')}
        {selectedSection == 'Contact' ? (<Contact/>):('')}
        {selectedSection == 'Resume' ? (<Resume/>):('')}
      </main>
    </div>
  );
}

export default App;
