import React from "react";
import '../css/Skill.css';

const skillsInfo = [
  {
    src: 'http://arbo.com.ve/wp-content/uploads/2016/01/laravel-logo.png',
    alt: 'laravel',
    description: 'Laravel',
  },
  {
    src: 'http://arbo.com.ve/wp-content/uploads/2016/01/laravel-logo.png',
    alt: 'laravel',
    description: 'Laravel',
  },
  {
    src: 'http://arbo.com.ve/wp-content/uploads/2016/01/laravel-logo.png',
    alt: 'laravel',
    description: 'Laravel',
  },
  {
    src: 'http://arbo.com.ve/wp-content/uploads/2016/01/laravel-logo.png',
    alt: 'laravel',
    description: 'Laravel',
  },
  {
    src: 'http://arbo.com.ve/wp-content/uploads/2016/01/laravel-logo.png',
    alt: 'laravel',
    description: 'Laravel',
  },
  {
    src: 'http://arbo.com.ve/wp-content/uploads/2016/01/laravel-logo.png',
    alt: 'laravel',
    description: 'Laravel',
  },
  {
    src: 'http://arbo.com.ve/wp-content/uploads/2016/01/laravel-logo.png',
    alt: 'laravel',
    description: 'Laravel',
  }
]

const Skills = skillsInfo.map(skill => (
  <div className='skill-container'>
    <div className='skill-image'>
      <img src={skill.src} alt={skill.alt} />
    </div>
    <div className='skill-description'>
      <p>{skill.description}</p>
    </div>
  </div>
))

export default Skills;