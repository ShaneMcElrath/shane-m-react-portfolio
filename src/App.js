import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
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
        {selectedSection == 'AboutMe' ? (<AboutMe></AboutMe>):('')}
        {selectedSection == 'Portfolio' ? (<Portfolio></Portfolio>):('')}
      </main>
    </div>
  );
}

export default App;
