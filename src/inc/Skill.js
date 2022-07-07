import React from 'react';
import '../css/Skill.css';
import Skills from '../js/Skills';

const Skill = () => {
  return (
    <div className='skills-container'>
      <div className="skill-title">
        <h1>SKILLS</h1>
      </div>
      <div className='skills'>
        {Skills}
      </div>
    </div>
  )
}

export default Skill;