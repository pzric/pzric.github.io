import React from "react";
import '../css/Project.css';
import github from '../img/githubicon.svg';
import cashcard from '../img/spring-academy.png';
import forohub from '../img/forohub.png';
import literalura from '../img/literalura.png';
import laraveltemplate from '../img/laravel-template.png';
import portafolio from '../img/portafolio.png';

const projectInfo = [
    {
        id: '0',
        src: cashcard,
        alt: 'cash card application',
        title: 'Cash Card Application',
        description: 'Este proyecto asegura una API REST con Spring Boot, utilizando Spring Security, OAuth 2.0, y JWT para proteger y autenticar usuarios, con pruebas automatizadas para validar su seguridad.',
        aos:'fade-right',
        url:'https://github.com/pzric/CashCard-v2.git',
        tags:[
            {name:'Gradle', className:'tag-mysql'},
            {name:'Spring Boot', className:'tag-springboot'},
            {name:'H2 Data base', className:'tag-mysql'},
            {name:'Insomnia', className:'tag-insomnia'},
            {name:'Java', className:'tag-java'},
        ]            
    },{
        id: '1',
        src: forohub,
        alt: 'forohub',
        title: 'ForoHub',
        description: 'ForoHub es una API RESTful con Spring Framework para gestionar temas de foro, asegurando integridad y seguridad con autenticación robusta y bases de datos relacionales.',
        aos:'fade-right',
        url:'https://github.com/pzric/Foro-hub.git',
        tags:[
            {name:'Maven', className:'tag-maven'},
            {name:'Spring Boot', className:'tag-springboot'},
            {name:'MySQL', className:'tag-mysql'},
            {name:'Insomnia', className:'tag-insomnia'},
            {name:'Java', className:'tag-java'},
            {name:'SQL', className:'tag-sql'},
        ]            
    },{
        id: '2',
        src: literalura,
        alt: 'forohub',
        title: 'Liter Alura',
        description: 'Es un catálogo de libros con Spring Boot, que interactúa mediante consola y consume una API externa para obtener datos de libros que utiliza una base de datos relacional para almacenamiento persistente.',
        aos:'fade-left',
        url:'https://github.com/pzric/Liter-alura.git',
        tags:[
            {name:'Maven', className:'tag-maven'},
            {name:'Spring Boot', className:'tag-springboot'},
            {name:'PostgreSQL', className:'tag-postgresql'},
            {name:'Java', className:'tag-java'},
            {name:'SQL', className:'tag-sql'},
        ]            
    },{
        id: '3',
        src: laraveltemplate,
        alt: 'laravel-template',
        title: 'Laravel-Template',
        description: 'Es un template que incluye funcionalidades completas de autenticación con página de login y logout, barra lateral y barra de navegación superior. Además, ofrece un panel de control y operaciones CRUD para usuarios.',
        aos:'fade-right',
        url:'https://github.com/pzric/Laravel-Template.git',
        tags:[
            {name:'Laravel', className:'tag-laravel'},
            {name:'Livewire', className:'tag-livewire'},
            {name:'MySQL', className:'tag-mysql'},
            {name:'HTML', className:'tag-java'},
            {name:'PHP', className:'tag-php'},
            {name:'Tailwind', className:'tag-tailwind'},
            {name:'SweeAlert2', className:'tag-sweetalert2'},
            {name:'Alpine.js', className:'tag-alpine-js'},
        ]            
    },{
        id: '4',
        src: portafolio,
        alt: 'portafolio-img',
        title: 'Portafolio',
        description: 'Portafolio web desarrollado en React que utiliza animaciones para una experiencia interactiva. Este proyecto está diseñado para exhibir habilidades y proyectos de manera moderna y dinámica.',
        aos:'fade-left',
        url:'https://github.com/pzric/pzric.github.io.git',
        tags:[
            {name:'React', className:'tag-react'},
            {name:'HTML', className:'tag-html'},
            {name:'CSS', className:'tag-css'},
            {name:'JavaScript', className:'tag-js'},
        ]            
    }
]

const Projects = projectInfo.map((project, index) =>
    <div className='project-container' data-aos={`${project.aos}`} key={index}>
        <img className='card-image ' src={project.src} alt={project.alt} />
        <div className='card-details'>
            <h2 className='card-title'>{project.title}</h2>
            <p className='card-description'>{project.description}</p>
            <div className='card-tags'>
                {project.tags.map((tag, tagindex) =>
                <span key={tagindex} className={`card-tag ${tag.className}`}>
                    {tag.name}
                </span>
                )}
            </div>
            <a href={`${project.url}`} className='card-link'>
                <img src={github} alt='github-icon' className='card-icon-github' />
                Ver en GitHub
            </a>
        </div> 
    </div>
)

export default Projects;