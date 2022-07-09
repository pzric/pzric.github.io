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
    src: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
    alt: 'c++',
    description: 'C++',
  },{
    id: '6',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png',
    alt: 'laravel',
    description: 'Laravel',
  },{
    id: '7',
    src: 'https://laravel-livewire.com/img/twitter.png',
    alt: 'laravel-livewire',
    description: 'Laravel-Livewire',
  },{
    id: '8',
    src: 'https://avatars.githubusercontent.com/u/35137722?v=4&s=160',
    alt: 'swert-alert2',
    description: 'SweetAlert2',
  },{
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
    alt: 'tailwind',
    description: 'Tailwind',
  },{
    id: '9',
    src: 'https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png',
    alt: 'bootstrap',
    description: 'Bootstrap',
  },{
    id: '10',
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
    alt: 'mysql',
    description: 'MySQL',
  },{
    id: '11',
    src: 'https://cdn-icons-png.flaticon.com/512/5968/5968364.png',
    alt: 'sqlserver',
    description: 'SQLServer',
  },{
    id: '12',
    src: 'https://brandlogos.net/wp-content/uploads/2016/01/github-octocat-logo-vector-download.jpg',
    alt: 'github',
    description: 'GitHub',
  },{
    id: '13',
    src: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEcLs3u_y1EaA/company-logo_200_200/0/1617115721518?e=2147483647&v=beta&t=OMULIw83WZw5CX6Xx9iIPvAMKPcnLCDbLtT_zpSW9HY',
    alt: 'justinmind',
    description: 'Justinmind',
  },{
    id: '14',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtULt6OCvN8F-0SiaYuENe1xfjJJT-GS6RjrQ8GAM1BTzV94m8JWvwfUz0-aFBS5cPm0&usqp=CAU',
    alt: 'arduino',
    description: 'Arduino',
  },{
    id: '15',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1ZS0NJ7eUVKbeN0mBtqaR4OzGtItW3nptIuEauZdkL9xKnjD3eshaVKoviKDO2RbQX4&usqp=CAU',
    alt: 'unity',
    description: 'Unity',
  }
]


const Skills = skillsInfo.map((skill, index) => 
  <div className='skill-container' key={index}>
    <center>
      <img src={skill.src} alt={skill.alt}/>
      <p>{skill.description}</p>
    </center>
  </div>
)

export default Skills;