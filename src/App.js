import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Navbar from './Components/Pages/Navbar'
import About from './Components/About';
import Projects from './Components/Pages/Projects';
import Skill from './Components/Pages/SoftSkill';
import Contact from './Components/Pages/Contact';
import Education from './Components/Pages/Education';
import Certification from './Components/Pages/Certification';
import Hobbies from './Components/Pages/Hobbies';


function App() {
  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/portfolio/about" exact element={<About />} />
          <Route path="*" exact element={<About />} />
          <Route path="/portfolio/projects" exact element={<Projects />} />
          <Route path="/portfolio/skill" exact element={<Skill />} />
          <Route path="/portfolio/hobbies" exact element={<Hobbies />} />
          <Route path="/portfolio/education" exact element={<Education />} />
          <Route path="/portfolio/certification" exact element={<Certification />} />
          <Route path="/portfolio/contact" exact element={<Contact />} />

        </Routes>
      </Router> </>
  );
}

export default App;
