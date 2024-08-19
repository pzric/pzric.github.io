import React from 'react';
import '../css/Project.css';
import Projects from '../js/Projects';

const Project = () => {
  return (
    <section className='projects-container'>
      <div className='project-title' data-aos='fade-down'>
        <h1>MIS PROYECTOS</h1>        
      </div>
      <div className='project-content'>
        {Projects}
      </div>
    </section>
  )
}

export default Project