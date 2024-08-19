import React from "react";
import '../css/Skill.css';

const skillsInfo = [
  {
    id: '1',
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
    alt: 'html',
    description: 'HML5',
  },{
    id: '2',
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
    alt: 'css3',
    description: 'CSS3',
  },{
    id: '3',
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    alt: 'javascript',
    description: 'JavaScript',
  },{
    id: '4',
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
    alt: 'php',
    description: 'PHP',
  },{
    id: '5',
    src: 'https://cdn.worldvectorlogo.com/logos/java.svg',
    alt: 'java',
    description: 'Java',
  },{
    id: '6',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/640px-Spring_Boot.svg.png',
    alt: 'springboot',
    description: 'Spring Boot',
  },{
    id: '7',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYZ1fmpksd1w32SwMGIC-cLu4Woq3adpO-A&s',
    alt: 'spring jpa',
    description: 'Spring Data JPA',
  },{
    id: '8',
    src: 'https://www.javacodegeeks.com/wp-content/uploads/2014/07/spring-security-project.png',
    alt: 'spring security',
    description: 'Spring Security',
  },{
    id: '9',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png',
    alt: 'laravel',
    description: 'Laravel',
  },{
    id: '10',
    src: 'https://raw.githubusercontent.com/innocenzi/awesome-inertiajs/main/assets/logo.svg',
    alt: 'laravel-inertia ',
    description: 'Laravel Inertia',
  },{
    id: '11',
    src: 'https://laravel-livewire.com/img/twitter.png',
    alt: 'laravel-livewire',
    description: 'Laravel Livewire',
  },{
    id: '12',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
    alt: 'tailwind',
    description: 'Tailwind',
  },{
    id: '13',
    src: 'https://cdn-icons-png.flaticon.com/512/9544/9544010.png',
    alt: 'sql',
    description: 'SQL',
  },  {
    id: '14',
    src: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_original_logo_icon_146391.png',
    alt: 'postgresql',
    description: 'PostgreSQL',
  },{
    id: '15',
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
    alt: 'mysql',
    description: 'MySQL',
  },{
    id: '16',
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968364.png',
    alt: 'sqlserver',
    description: 'SQLServer',
  },{
    id: '17',
    src: 'https://brandlogos.net/wp-content/uploads/2016/01/github-octocat-logo-vector-download.jpg',
    alt: 'github',
    description: 'GitHub',
  },{
    id: '18',
    src: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEcLs3u_y1EaA/company-logo_200_200/0/1617115721518?e=2147483647&v=beta&t=OMULIw83WZw5CX6Xx9iIPvAMKPcnLCDbLtT_zpSW9HY',
    alt: 'justinmind',
    description: 'Justinmind',
  },{
    id: '19',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkTHO4BdVq2a09ZvrovInv7l_RQQmRFUx_A&s',
    alt: 'maven',
    description: 'Maven',
  },{
    id: '20',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6S_G-CspL5v7cAMV7PH79hkEJdkeZIb8J0Q&shttps://cdn.icon-icons.com/icons2/2108/PNG/512/gradle_icon_130917.png',
    alt: 'gradle ',
    description: 'Gradle',
  },{
    id: '21',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png',
    alt: 'npm',
    description: 'npm',
  },{
    id: '22',
    src: 'https://www.svgrepo.com/show/353904/insomnia.svg',
    alt: 'insomnia',
    description: 'Insomnia',
  },{
    id: '23',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtL7FUpPuovoWgr50CvwNvC0UEkism8V0Xg&s',
    alt: 'api-rest',
    description: 'ApiREST',
  },{
    id: '24',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/300px-NewTux.svg.png',
    alt: 'so-linux',
    description: 'GNU/Linux',
  }
]


const Skills = skillsInfo.map((skill, index) => 
  <div className='skill-container' data-aos='zoom-in' key={index}>
    <center>
      <img src={skill.src} alt={skill.alt}/>
      <p>{skill.description}</p>
    </center>
  </div>
)

export default Skills;