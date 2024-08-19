import React from 'react';
import '../css/Experience.css';

const Experience = () => {
  return (
    <section className='experience-container'>
      <div className='experience-title' data-aos='fade-down'>
        <h1>EXPERIENCIA</h1>
      </div>
      <div className='experience-content' data-aos='fade-up'>
        <div className='left-content'>
          <h2>Educacion</h2>
          <div>
            <strong>Ingenieria en Sistemas Computacionales</strong>
            <p>Instituto Tecnologico de Tlaxcala</p>
          </div>
          <div>
            <strong>Tecnico en programacion</strong>
            <p>Colegio de Estudios Cientificos y Tecnologicos de Tlaxcala</p>
          </div>
          <h2>Cursos</h2>
          <div>
            <strong>Curso en Oracle Next Education</strong>
            <p>Consultas SQL</p>
            <p>Java y Spring Boot</p>
            <p>Java Orientado a Objetos</p>
          </div>
          <div>
            <strong>Animaciones y efectos interativos con CSS</strong>
          </div>
          <div>
            <strong>Control de versiones GIT</strong>
          </div>
          <div>
            <strong>Maquetacion Web</strong>
          </div>
        </div>
        <div className='right-content'>
          <h2>Profesional</h2>
        </div>
      </div>
    </section>
  )
}

export default Experience
