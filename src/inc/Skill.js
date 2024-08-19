import React from 'react';
import '../css/Skill.css';
import Skills from '../js/Skills';

const Skill = () => {
  return (
    <section className='skills-container'>
      <div className='skills-title' data-aos='fade-down'>
        <h1>MIS HABILIDADES</h1>
      </div>
      <div className='skills-content'>
        {Skills}
      </div>
    </section>
  )
}

export default Skill;