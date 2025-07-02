import React from 'react';
import './CSS/About.css' 
import img from './asset/meee.png'
import SoftSkills from './Pages/SoftSkill';
import Education from './Pages/Education';
import Hobbies from './Pages/Hobbies';
import resume from './asset/resume.pdf'
 
const About = () => {
   
   return (
    <>
      <div className="about-container">
        <section className="profile-section">
          <h2>SHIVENDRA OJHA</h2>
          <img src={img} alt="Profile" />
          <p>
IT Graduate from Avadh University | Frontend Developer | Java Enthusiast | Exploring Data Structures & Algorithms | Passionate about building web solutions          </p>
          <a href={resume} target="_blank" rel="noopener noreferrer" download>
          <button >DOWNLOAD RESUME </button></a>
       
       
       
       
       
       
       
       
        </section>
        <hr className='hr' />
        <section className="soft-skills-section">
           <Education />
        </section>
        <section className="soft-skills-section">
          <SoftSkills />
        </section>

        <section className="future-goals-section">
          <Hobbies />
        </section>

      

      </div>


    </>
  );
}

export default About;
