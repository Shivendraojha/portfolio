import React from 'react';
import '../CSS/Projects.css';
import proa from '../asset/pro1.png'
import prob from '../asset/pro2.png'
import proc from '../asset/pro3.png'
import prod from '../asset/pro4.png'
import github from '../asset/github.png'


const Projects = () => {


  return (
    <>

      <div className="projects-container">
        <h1>Projects</h1>

        <div className="project-list">
          <div className="project-card">
            <div className="project-header">
              <h2>TO-DO LIST</h2>
            </div>

            <img src={prod} className='proimg' />

            <div className="project-content">
              <p>TO-DO list </p>
              <div className="technologies-list">
                <strong>Technologies:</strong> reactjs
              </div>
              <div className="project-links">
                <a href='https://shivendraojha.github.io/to-do/' target="_blank" rel="noopener noreferrer">DEMO</a>
                <a href='https://github.com/Shivendraojha/to-do' target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h2>PROFILE</h2>
            </div>

            <img src={proa} className='proimg' />

            <div className="project-content">
              <p>Portfolio using Javascript and CSS</p>
              <div className="technologies-list">
                <strong>Technologies:</strong> javascript CSS
              </div>
              <div className="project-links">
                <a href='https://itengineer.tech/' target="_blank" rel="noopener noreferrer">DEMO</a>
                <a href='https://github.com/Shivendraojha/portfolio' target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>








          <div className="project-card">
            <div className="project-header">
              <h2>CALCULATOR</h2>
            </div>

            <img src={prob} className='proimg' />

            <div className="project-content">
              <p>Calculator using javascript and CSS</p>
              <div className="technologies-list">
                <strong>Technologies:</strong> javascript CSS
              </div>
              <div className="project-links">
                <a href='https://shivendraojha.github.io/Calculator/' target="_blank" rel="noopener noreferrer">DEMO</a>
                <a href='https://github.com/Shivendraojha/Calculator' target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>










          <div className="project-card">
            <div className="project-header">
              <h2>LEARNHERE</h2>
            </div>

            <img src={proc} className='proimg' />

            <div className="project-content">
              <p>Learning web-page</p>
              <div className="technologies-list">
                <strong>Technologies:</strong> CSS
              </div>
              <div className="project-links">
                <a href='https://shivendraojha.github.io/learnhere/' target="_blank" rel="noopener noreferrer">DEMO</a>
                <a href='https://github.com/Shivendraojha/learnhere' target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>





        </div>
      </div>






      <h3>For more visit :  <a href="https://github.com/Shivendraojha?tab=repositories" target="_blank" rel="noopener noreferrer " >
        <img src={github} alt="github" className='giticon' />  </a> </h3>









    </>


  );
}

export default Projects;
