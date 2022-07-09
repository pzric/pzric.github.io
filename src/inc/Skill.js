import React from 'react';
import '../css/Skill.css';
import Skills from '../js/Skills';

const Skill = () => {
  return (
    <section className='skills-container'>
      <div className="title">
        <h1>MIS HABILIDADES</h1>
      </div>
      <div className='skills'>
        {Skills}
      </div>
    </section>
  )
}

export default Skill;